import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Users, Building2, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import keralaHeroImage from '@/assets/kerala-health-hero.jpg';

const roles = [
  {
    id: 'migrant',
    title: 'Migrant Worker / Contractor',
    titleMl: 'കുടിയേറ്റ തൊഴിലാളി / കരാറുകാരൻ',
    description: 'Access your health records, view QR health card, and manage your medical information',
    descriptionMl: 'നിങ്ങളുടെ ആരോഗ്യ രേഖകൾ ആക്സസ് ചെയ്യുക, QR ആരോഗ്യ കാർഡ് കാണുക',
    icon: Users,
    color: 'kerala',
    route: '/migrant-login'
  },
  {
    id: 'hospital',
    title: 'Hospital / Health Officer',
    titleMl: 'ആശുപത്രി / ആരോഗ്യ ഉദ്യോഗസ്ഥൻ',
    description: 'Upload test results, manage patient records, and update health information',
    descriptionMl: 'പരിശോധന ഫലങ്ങൾ അപ്‌ലോഡ് ചെയ്യുക, രോഗി രേഖകൾ കൈകാര്യം ചെയ്യുക',
    icon: Building2,
    color: 'trust',
    route: '/hospital-login'
  },
  {
    id: 'government',
    title: 'Government Official',
    titleMl: 'സർക്കാർ ഉദ്യോഗസ്ഥൻ',
    description: 'View health metrics, generate reports, and monitor system analytics',
    descriptionMl: 'ആരോഗ്യ മെട്രിക്സ് കാണുക, റിപ്പോർട്ടുകൾ സൃഷ്ടിക്കുക',
    icon: Shield,
    color: 'health',
    route: '/government-login'
  }
];

export default function RoleSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const navigate = useNavigate();

  const handleRoleSelect = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-backwater">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${keralaHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/60" />
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <header className="flex justify-between items-center p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-medical-white rounded-full flex items-center justify-center shadow-medical">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">Kerala Migrant Health</h1>
                <p className="text-white/90 text-sm">Athidhi Portal Integration</p>
              </div>
            </div>
            <LanguageSwitcher />
          </header>

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center text-center px-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {selectedLanguage === 'ml' ? 'കേരള കുടിയേറ്റ ആരോഗ്യ രേഖാ പരിപാലന സംവിധാനം' : 
                 'Kerala Migrant Health Record Management System'}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {selectedLanguage === 'ml' ? 'നിങ്ങളുടെ ആരോഗ്യ രേഖകൾ സുരക്ഷിതവും ആക്സസ് ചെയ്യാവുന്നതുമാക്കുന്നു' : 
                 'Making health records secure, accessible, and comprehensive for all'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            {selectedLanguage === 'ml' ? 'നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക' : 'Select Your Role'}
          </h3>
          <p className="text-muted-foreground text-lg">
            {selectedLanguage === 'ml' ? 'സിസ്റ്റത്തിൽ പ്രവേശിക്കാൻ നിങ്ങളുടെ പങ്ക് തിരഞ്ഞെടുക്കുക' : 
             'Choose your role to access the appropriate interface'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roles.map((role) => (
            <Card 
              key={role.id} 
              className="group hover:shadow-kerala transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 hover:border-primary/30"
              onClick={() => handleRoleSelect(role.route)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-kerala rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <role.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">
                  {selectedLanguage === 'ml' ? role.titleMl : role.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {selectedLanguage === 'ml' ? role.descriptionMl : role.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <EnhancedButton 
                  variant={role.color as any} 
                  className="w-full gap-2"
                  size="lg"
                >
                  {selectedLanguage === 'ml' ? 'പ്രവേശിക്കുക' : 'Access Portal'}
                  <ArrowRight className="h-4 w-4" />
                </EnhancedButton>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            {selectedLanguage === 'ml' ? 'അഥിതി പോർട്ടൽ സംയോജനത്തോടെ' : 'Powered by Athidhi Portal Integration'}
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>Government of Kerala</span>
            <span>•</span>
            <span>Health & Family Welfare</span>
            <span>•</span>
            <span>Labour Department</span>
          </div>
        </div>
      </div>
    </div>
  );
}