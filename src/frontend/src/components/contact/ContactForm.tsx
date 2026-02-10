import { useState } from 'react';
import { useSubmitContactMessage } from '../../hooks/useContactSubmissions';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BrandButton } from '../shared/BrandButton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitMutation = useSubmitContactMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return;
    }

    try {
      await submitMutation.mutateAsync(formData);
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      // Error is handled by the mutation
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <div className="bg-white p-8 rounded-none border-2 border-red/30">
      <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-black font-semibold">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 rounded-none border-black/20 focus:border-red focus:ring-red"
            placeholder="Your full name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-black font-semibold">
            Email / Phone *
          </Label>
          <Input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 rounded-none border-black/20 focus:border-red focus:ring-red"
            placeholder="your@email.com or phone number"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-black font-semibold">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="mt-2 rounded-none border-black/20 focus:border-red focus:ring-red resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        {submitMutation.isSuccess && (
          <Alert className="bg-green/10 border-green text-green rounded-none">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </AlertDescription>
          </Alert>
        )}

        {submitMutation.isError && (
          <Alert className="bg-red/10 border-red text-red rounded-none">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {submitMutation.error instanceof Error
                ? submitMutation.error.message
                : 'Failed to send message. Please try again or contact us directly.'}
            </AlertDescription>
          </Alert>
        )}

        <BrandButton
          type="submit"
          variant="primary"
          className="w-full"
          disabled={!isFormValid || submitMutation.isPending}
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </BrandButton>
      </form>
    </div>
  );
}
