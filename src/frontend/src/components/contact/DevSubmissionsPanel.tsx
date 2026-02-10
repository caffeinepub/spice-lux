import { useGetAllMessages } from '../../hooks/useContactSubmissions';
import { BrandCard } from '../shared/BrandCard';
import { Loader2 } from 'lucide-react';

export function DevSubmissionsPanel() {
  const { data: messages, isLoading, error } = useGetAllMessages();

  if (isLoading) {
    return (
      <div className="mt-12 p-8 bg-black/5 border-2 border-black/10 rounded-none">
        <div className="flex items-center justify-center gap-2 text-black/60">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading submissions...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 p-8 bg-red/10 border-2 border-red/30 rounded-none">
        <p className="text-red text-center">
          Error loading submissions. Make sure you're logged in as admin.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-black mb-6">
        Dev Panel: Contact Submissions ({messages?.length || 0})
      </h3>

      {!messages || messages.length === 0 ? (
        <p className="text-black/60 text-center py-8">No submissions yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {messages.map((message, index) => (
            <BrandCard key={index} hover={false}>
              <div className="p-6 space-y-3">
                <div>
                  <p className="text-xs text-gold mb-1">Name</p>
                  <p className="text-cream font-semibold">{message.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gold mb-1">Email/Phone</p>
                  <p className="text-cream">{message.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gold mb-1">Message</p>
                  <p className="text-cream/90 text-sm">{message.text}</p>
                </div>
              </div>
            </BrandCard>
          ))}
        </div>
      )}
    </div>
  );
}
