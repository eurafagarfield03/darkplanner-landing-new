import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Database, Globe, Mail } from "lucide-react";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/20">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {t("privacy.title")}
              </h1>
            </div>

            <div className="space-y-8">
              {/* No Data Collection */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-green-500/20 mt-1">
                    <Database className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{t("privacy.noCollection.title")}</h2>
                    <p className="text-muted-foreground">
                      {t("privacy.noCollection.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Local Storage */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                    <Database className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{t("privacy.localStorage.title")}</h2>
                    <p className="text-muted-foreground">
                      {t("privacy.localStorage.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* External Communication */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-yellow-500/20 mt-1">
                    <Globe className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{t("privacy.external.title")}</h2>
                    <p className="text-muted-foreground">
                      {t("privacy.external.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20 mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{t("privacy.contact.title")}</h2>
                    <p className="text-muted-foreground">
                      <a 
                        href="mailto:contato@darkplanner.com.br" 
                        className="text-primary hover:underline"
                      >
                        contato@darkplanner.com.br
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Last Update */}
              <p className="text-sm text-muted-foreground text-center pt-4">
                {t("privacy.lastUpdate")}: {t("privacy.updateDate")}
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
