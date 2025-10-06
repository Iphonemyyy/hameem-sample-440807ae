import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Clock, Phone } from "lucide-react";
import officeInterior from "@/assets/office-interior.jpg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  isArabic: boolean;
}

export const Contact = ({ isArabic }: ContactProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const content = {
    ar: {
      title: "كيف يمكننا مساعدتك؟",
      nameLabel: "الاسم",
      phoneLabel: "رقم الهاتف",
      emailLabel: "البريد الإلكتروني",
      subjectLabel: "الموضوع",
      messageLabel: "الرسالة",
      submitBtn: "إرسال",
      bookingTitle: "طلب الاستشارات وحجز المواعيد",
      bookingDesc: "يمكنك تقديم طلب استشارة أو حجز موعد لزيارة المكتب لطلب الاستشارة أو توثيق الوكالات عن طريق التواصل معنا عبر الموقع.",
      hoursTitle: "ساعات العمل في المكتب",
      hours: [
        { day: "الأحد", time: "9AM–2PM ● 4:30–8:30PM" },
        { day: "الإثنين", time: "9AM–2PM ● 4:30–8:30PM" },
        { day: "الثلاثاء", time: "9AM–2PM ● 4:30–8:30PM" },
        { day: "الأربعاء", time: "9AM–2PM ● 4:30–8:30PM" },
        { day: "الخميس", time: "9:00 AM - 2:00 PM" },
        { day: "الجمعة", time: "مغلق" },
        { day: "السبت", time: "4:30 PM - 8:30 PM" },
      ],
      successMsg: "تم إرسال رسالتك بنجاح!",
    },
    en: {
      title: "How Can We Help You?",
      nameLabel: "Name",
      phoneLabel: "Phone Number",
      emailLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      submitBtn: "Submit",
      bookingTitle: "Consultation & Appointment Booking",
      bookingDesc: "You can submit a consultation request or book an appointment to visit the office for consultation or power of attorney notarization by contacting us through the website.",
      hoursTitle: "Office Hours",
      hours: [
        { day: "Sunday", time: "9AM–2PM ● 4:30–8:30PM" },
        { day: "Monday", time: "9AM–2PM ● 4:30–8:30PM" },
        { day: "Tuesday", time: "9AM–2PM ● 4:30–8:30PM" },
        { day: "Wednesday", time: "9AM–2PM ● 4:30–8:30PM" },
        { day: "Thursday", time: "9:00 AM - 2:00 PM" },
        { day: "Friday", time: "Closed" },
        { day: "Saturday", time: "4:30 PM - 8:30 PM" },
      ],
      successMsg: "Your message has been sent successfully!",
    },
  };

  const text = isArabic ? content.ar : content.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: text.successMsg,
    });
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-secondary/30 py-20"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            {text.title}
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="border-primary/20 bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {text.nameLabel}
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-primary/30 bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {text.phoneLabel}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-primary/30 bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {text.emailLabel}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-primary/30 bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {text.subjectLabel}
                  </label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="border-primary/30 bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {text.messageLabel}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 border-primary/30 bg-background"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {text.submitBtn}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-primary/20 bg-card">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {text.bookingTitle}
                </h3>
                <p className="mb-6 text-muted-foreground">{text.bookingDesc}</p>
                <div className="flex items-center gap-3 text-xl font-bold text-foreground">
                  <Phone className="h-6 w-6 text-primary" />
                  <a href="tel:0555822339" className="hover:text-primary">
                    0555822339
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card">
              <CardContent className="p-8">
                <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-primary">
                  <Clock className="h-6 w-6" />
                  {text.hoursTitle}
                </h3>
                <div className="space-y-3">
                  {text.hours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-primary/10 pb-2 text-sm"
                    >
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src={officeInterior}
                alt="Office"
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
