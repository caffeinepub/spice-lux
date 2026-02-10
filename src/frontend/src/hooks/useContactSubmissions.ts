import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Message } from '../backend';

// Hook to submit a contact message
export function useSubmitContactMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not available');

      const message: Message = {
        name: data.name,
        email: data.email,
        text: data.message,
      };

      // Generate a unique ID for the message (timestamp + random)
      const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      await actor.saveMessage(id, message);
      return { id, message };
    },
    onSuccess: () => {
      // Invalidate messages query to refresh the dev panel
      queryClient.invalidateQueries({ queryKey: ['contactMessages'] });
    },
  });
}

// Hook to get all messages (admin only, for dev verification)
export function useGetAllMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<Message[]>({
    queryKey: ['contactMessages'],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getAllMessages();
      } catch (error) {
        // If unauthorized, return empty array
        console.warn('Unable to fetch messages:', error);
        return [];
      }
    },
    enabled: !!actor && !isFetching,
  });
}
