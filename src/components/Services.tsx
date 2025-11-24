import { FileText, Home, Shield, Building, Scale, Briefcase, Users, Gavel } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface ServicesProps {
  isArabic: boolean;
}

export const Services = ({ isArabic }: ServicesProps) => {
  const content = {
    ar: {
      title: "خدماتنا القانونية وخدمات التوثيق",
      notaryTitle: "خدمات التوثيق",
      notaryDesc: "يقدم المكتب كافة خدمات التوثيق خلال أيام الأسبوع وعلى مدار 24 ساعه وخلال وخارج الدوام الرسمي وأيام الإجازات الرسمية سواء في مقر المكتب أو مقر صاحب الخدمة ومنها خدمة إفراغ العقارات وإصدار الوكالات وفسخها وتوثيق عقود الشركات وقرارات التعديل.",
      notaryServices: [
        { icon: Building, title: "توثيق عقود تأسيس الشركات" },
        { icon: Shield, title: "توثيق فك وتصحيح رهن العقارات" },
        { icon: Home, title: "توثيق إفراغ ورهن العقارات" },
        { icon: FileText, title: "توثيق إصدار وفسخ الوكالات الشرعية" },
      ],
      legalTitle: "خدماتنا القانونية",
      legalDesc: "نوفر في مكتب المحامي فيصل الغامدي الحماية القانونية للشركات المحلية والأجنبية والأفراد، ونقدم الاستشارات القانونية في مختلف المجالات. بالإضافة إلى تقديم الخدمات القانونية لقطاع الأعمال من خلال حلفاءنا الدوليين. كما نقوم بالمرافعة والمدافعة نيابة عن عملائنا في جميع المنازعات و القضايا لتغطية الحماية القانونية اللازمة للجميع.",
      legalServices: [
        { 
          icon: Building, 
          title: "تأسيس وتسجيل الشركات",
          description: "نساعدك في تأسيس شركتك وتسجيلها وفق الأنظمة السعودية، مع تقديم الاستشارات القانونية اللازمة لاختيار الشكل القانوني المناسب."
        },
        { 
          icon: Gavel, 
          title: "القضايا الجنائية",
          description: "نمثل موكلينا في القضايا الجنائية ونقدم الدفاع القانوني الكامل أمام المحاكم الجزائية وفق الأنظمة الشرعية."
        },
        { 
          icon: Home, 
          title: "القضايا العقارية",
          description: "نتولى كافة القضايا المتعلقة بالعقارات من نزاعات الملكية والإيجارات والتعويضات العقارية."
        },
        { 
          icon: Scale, 
          title: "القضايا المدنية",
          description: "نقدم الخدمات القانونية في القضايا المدنية بما في ذلك التعويضات والعقود والمنازعات المدنية."
        },
        { 
          icon: Briefcase, 
          title: "القضايا التجارية",
          description: "نتعامل مع المنازعات التجارية وقضايا الشركات والعقود التجارية والإفلاس والتصفية."
        },
        { 
          icon: Users, 
          title: "القضايا العمالية",
          description: "نمثل أصحاب العمل والموظفين في النزاعات العمالية ونقدم الاستشارات المتعلقة بقانون العمل السعودي."
        },
      ],
    },
    en: {
      title: "Legal and Notary Services",
      notaryTitle: "Notary Services",
      notaryDesc: "The office provides all notarization services throughout the week, 24 hours a day, during and outside official working hours and on official holidays, whether at the office premises or the client's premises, including property transfers, power of attorney issuance and cancellation, company contract authentication, and amendment resolutions.",
      notaryServices: [
        { icon: Building, title: "Company Formation Documentation" },
        { icon: Shield, title: "Property Mortgage Release & Correction" },
        { icon: Home, title: "Property Transfers & Mortgages" },
        { icon: FileText, title: "Issuance & Cancellation of Power of Attorney" },
      ],
      legalTitle: "Our Legal Services",
      legalDesc: "We provide legal protection for local and foreign companies and individuals at our office, and offer legal consultations in various fields. In addition to providing legal services for the business sector through our international partners. We also plead and defend on behalf of our clients in all disputes and cases to provide the necessary legal protection for all.",
      legalServices: [
        { 
          icon: Building, 
          title: "Company Formation & Registration",
          description: "We help you establish and register your company according to Saudi regulations, providing legal consultation for choosing the appropriate legal structure."
        },
        { 
          icon: Gavel, 
          title: "Criminal Cases",
          description: "We represent our clients in criminal cases and provide full legal defense before criminal courts in accordance with Sharia regulations."
        },
        { 
          icon: Home, 
          title: "Real Estate Cases",
          description: "We handle all real estate-related cases including ownership disputes, leases, and real estate compensation."
        },
        { 
          icon: Scale, 
          title: "Civil Cases",
          description: "We provide legal services in civil cases including compensation, contracts, and civil disputes."
        },
        { 
          icon: Briefcase, 
          title: "Commercial Cases",
          description: "We deal with commercial disputes, corporate cases, commercial contracts, bankruptcy, and liquidation."
        },
        { 
          icon: Users, 
          title: "Labor Cases",
          description: "We represent employers and employees in labor disputes and provide consultations related to Saudi labor law."
        },
      ],
    },
  };

  const text = isArabic ? content.ar : content.en;

  return (
    <section
      id="services"
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

        <div className="mb-20 space-y-12">
          <div className="animate-fade-in">
            <h3 className="mb-6 text-3xl font-bold text-primary">
              {text.notaryTitle}
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {text.notaryDesc}
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {text.notaryServices.map((service, index) => (
                <Card
                  key={index}
                  className="border-primary/20 bg-card transition-all hover:scale-105 hover:border-primary"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-slide-up">
            <h3 className="mb-6 text-3xl font-bold text-primary">
              {text.legalTitle}
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {text.legalDesc}
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {text.legalServices.map((service, index) => (
                <Card
                  key={index}
                  className="group relative h-64 border-primary/20 bg-card transition-all hover:border-primary cursor-pointer perspective-1000"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-full w-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                    {/* Front */}
                    <CardContent className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center backface-hidden">
                      <div className="mb-4 rounded-full bg-primary/10 p-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {service.title}
                      </h4>
                    </CardContent>
                    
                    {/* Back */}
                    <CardContent className="absolute inset-0 flex items-center justify-center p-6 text-center backface-hidden rotate-y-180 bg-primary/5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
