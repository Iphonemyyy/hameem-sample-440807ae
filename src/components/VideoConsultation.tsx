import { Play } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface VideoConsultationProps {
  isArabic: boolean;
}

export const VideoConsultation = ({ isArabic }: VideoConsultationProps) => {
  const content = {
    ar: {
      title: "استشارات مرئية",
      description: `رغبة منا في المساهمة في نشر الوعي والثقافة القانونية، وتعريف أفراد المجتمع سواء من قطاع الأعمال أو الأفراد بالخدمات القانونية التي تقدمها وزارة العدل، فمنا في مكتب المحامي والموثق فيصل الغامدي بإصدار مجموعة من المقاطع المرئية التي تسهل إيصال الفكرة خلال نوانٍ محدودة وبدون عناء البحث والقراءة المطولة.`,
      videoTitle: "التوثيق خلال الإجازات والسفر",
    },
    en: {
      title: "Video Consultations",
      description: `To promote legal awareness and educate the community, whether individuals or the business sector, about legal services provided by the Ministry of Justice, our office releases short video consultations that explain common legal procedures in a clear and accessible way.`,
      videoTitle: "Notarization During Holidays and Travel",
    },
  };

  const text = isArabic ? content.ar : content.en;

  return (
    <section
      id="videos"
      className="py-20"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            {text.title}
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
        </div>

        <div className="mx-auto max-w-3xl">
          <p className="mb-12 text-center text-lg leading-relaxed text-muted-foreground">
            {text.description}
          </p>

          <Card className="overflow-hidden border-primary/20 bg-card" data-aos="scale-in">
            <CardContent className="p-0">
              <div className="group relative aspect-video bg-muted">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-all group-hover:bg-black/40">
                  <div className="rounded-full bg-primary/90 p-6 transition-transform group-hover:scale-110">
                    <Play className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {text.videoTitle}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
