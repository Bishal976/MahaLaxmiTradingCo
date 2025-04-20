import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { contactInfo, contactSectionData, companyInfo } from '@/data/siteData';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const isPhoneValid = (value: string) => /^\d{10}$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message || (phone && !isPhoneValid(phone))) {
      toast({
        title: "Error",
        description: "Please fill in all required fields. Phone number must be 10 digits if provided.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const templateParams = {
      name,
      email,
      phone,
      message,
    };

       emailjs.send(
      'service_yde06lp',      // Replace with your actual EmailJS service ID
      'template_er5oyy1',     // Replace with your template ID
      templateParams,
      'sl68aj1hrdmPiOcWO'          // Replace with your public API key (not secret)
    )
     
    emailjs.send(
      'service_yde06lp',      // Replace with your actual EmailJS service ID
      'template_2qhnh2k',     // Replace with your template ID
      templateParams,
      'sl68aj1hrdmPiOcWO'          // Replace with your public API key (not secret)
    ).then(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! We'll get back to you soon.",
      });

      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }).catch((err) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Try again.",
        variant: "destructive",
      });
    }).finally(() => {
      setLoading(false);
    });
  };


  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-heading center-heading">{contactSectionData.title}</h2>
          <p className="text-construction-gray text-lg mt-8">
            {contactSectionData.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-construction-darkBlue mb-6">{contactSectionData.formTitle}</h3>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      if (val.length <= 10) setPhone(val);
                    }}
                    placeholder="10-digit Phone Number"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-construction-blue hover:bg-construction-darkBlue text-white"
                  disabled={loading}
                >
                  {loading ? "Sending..." : contactSectionData.formSubmitButtonText}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-2xl font-bold text-construction-darkBlue mb-6">{contactSectionData.infoTitle}</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-construction-orange mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-semibold text-construction-darkBlue">Our Location</h4>
                  <p className="text-construction-gray mt-1">
                    {contactInfo.address.street}, <br />
                    {contactInfo.address.area}, <br />
                    {contactInfo.address.cityState}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-construction-orange mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-semibold text-construction-darkBlue">Phone Number</h4>
                  <p className="text-construction-gray mt-1">
                    {contactInfo.phone.primary} <br />
                    {contactInfo.phone.secondary}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-construction-orange mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-semibold text-construction-darkBlue">Email Address</h4>
                  <p className="text-construction-gray mt-1">
                    {contactInfo.email.info}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-construction-orange mt-1 mr-4" size={24} />
                <div>
                  <h4 className="font-semibold text-construction-darkBlue">Business Hours</h4>
                  <p className="text-construction-gray mt-1">
                    {companyInfo.businessHours.weekdays} <br />
                    {companyInfo.businessHours.weekends}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-construction-darkBlue text-white rounded-lg">
              <h4 className="text-xl font-semibold mb-2">{contactInfo.urgentDeliveryText}</h4>
              <p className="mb-4">{contactInfo.urgentDeliveryDescription}</p>
              <div className="text-lg font-bold">Hotline: {contactInfo.phone.hotline}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

