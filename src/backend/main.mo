import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Contact form message type
  type Message = {
    name : Text;
    email : Text;
    text : Text;
  };

  // User profile type for frontend integration
  public type UserProfile = {
    name : Text;
  };

  let messages = Map.empty<Text, Message>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management (required by frontend)
  
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact Form Submission Functions

  // Public endpoint - anyone (including guests) can submit contact forms
  public shared ({ caller }) func saveMessage(id : Text, message : Message) : async () {
    if (messages.containsKey(id)) { 
      Runtime.trap("This message already exists.") 
    };
    messages.add(id, message);
  };

  // Admin-only - contact form submissions contain sensitive user data
  public query ({ caller }) func getMessage(id : Text) : async Message {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view messages");
    };
    switch (messages.get(id)) {
      case (null) { Runtime.trap("Message does not exist") };
      case (?message) { message };
    };
  };

  // Admin-only - contact form submissions contain sensitive user data
  public query ({ caller }) func getAllMessages() : async [Message] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all messages");
    };
    messages.values().toArray();
  };
};
