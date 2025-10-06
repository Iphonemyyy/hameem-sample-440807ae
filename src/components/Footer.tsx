interface FooterProps {
  isArabic: boolean;
}

export const Footer = ({ isArabic }: FooterProps) => {
  const content = {
    ar: {
      copyright: "© جميع الحقوق محفوظة لمكتب المحامي والموثق فيصل الغامدي",
      links: ["الرئيسية", "الخدمات", "الاستشارات", "تواصل معنا"],
    },
    en: {
      copyright: "© All rights reserved – Faisal Alghamdi Law Office",
      links: ["Home", "Services", "Consultations", "Contact"],
    },
  };

  const text = isArabic ? content.ar : content.en;

  return (
    <footer className="border-t border-primary/20 bg-card py-8" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">{text.copyright}</p>
          <div className="flex gap-6">
            {text.links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
