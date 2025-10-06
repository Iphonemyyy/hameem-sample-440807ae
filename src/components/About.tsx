import lawyerPortrait from "@/assets/lawyer-portrait.jpg";

interface AboutProps {
  isArabic: boolean;
}

export const About = ({ isArabic }: AboutProps) => {
  const content = {
    ar: {
      title: "المحامي والموثق موسى النشمي",
      description: `يقوم مكتب المحامي والموثق موسى النشمي للمحاماة والاستشارات الشرعية والقانونية منذ تأسيسه وحتى الآن بدور فعال في تقديم النجح والمشورة في كافة المجالات القانونية والشرعية المرتبطة بالشركات والمؤسسات وحتى الأفراد بتوفير الحماية القانونية لهم من خلال نخبة من المحامين والمستشارين من ذوي الكفاءة والخبرة من الناحية العلمية والعملية.

كما نسعى إلى توفير الحماية القانونية للشركات المحلية والأجنبية والأفراد وتقديم الاستشارات في مختلف المجالات القانونية.`,
    },
    en: {
      title: "Lawyer & Notary Musa Alnashmi",
      description: `Our office provides legal and Sharia consultation for companies and individuals with a team of experienced lawyers and consultants. Since its establishment, we have been providing successful legal representation and advice in all legal and Sharia fields related to companies, institutions, and individuals by providing legal protection through a team of competent and experienced lawyers and consultants from both academic and practical perspectives.

We also strive to provide legal protection for local and foreign companies and individuals and provide consultations in various legal fields.`,
    },
  };

  const text = isArabic ? content.ar : content.en;

  return (
    <section
      id="about"
      className="py-20"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute -inset-2 border-2 border-primary opacity-30" />
              <div className="absolute -left-4 -top-4 h-20 w-20 border-l-4 border-t-4 border-primary" />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b-4 border-r-4 border-primary" />
              <img
                src={lawyerPortrait}
                alt={text.title}
                className="relative h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="animate-slide-up space-y-6">
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              {text.title}
            </h2>
            <div className="h-1 w-24 bg-primary" />
            <p className="whitespace-pre-line text-lg leading-relaxed text-muted-foreground">
              {text.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
