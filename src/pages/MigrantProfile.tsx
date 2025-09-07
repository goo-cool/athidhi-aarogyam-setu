import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  ArrowLeft, 
  Download, 
  QrCode, 
  User, 
  MapPin, 
  Phone, 
  Calendar,
  Heart,
  FileText,
  AlertCircle,
  CheckCircle,
  Building,
  Siren,
  Shield,
  Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import qrHealthCard from '@/assets/qr-health-card.jpg';
import swasthyamLogo from '@/assets/swasthyam-logo.png';

// Mock data
const workerProfile = {
  name: 'രാജേഷ് കുമാർ',
  nameEn: 'Rajesh Kumar',
  aadhaarNumber: '****-****-3456',
  uhid: 'KL2024001234',
  phoneNumber: '+91 98765 43210',
  dateOfBirth: '15/08/1990',
  address: 'തിരുവനന്തപുരം, കേരളം',
  addressEn: 'Thiruvananthapuram, Kerala',
  employer: 'കേരള കൺസ്ട്രക്ഷൻ കമ്പനി',
  employerEn: 'Kerala Construction Company',
  workLocation: 'കൊച്ചി',
  workLocationEn: 'Kochi',
  emergencyContact: {
    name: 'സുനിത കുമാർ',
    nameEn: 'Sunita Kumar',
    relation: 'ഭാര്യ',
    relationEn: 'Wife',
    phone: '+91 98765 43211'
  }
};

const healthRecords = [
  {
    id: 1,
    type: 'vaccination',
    title: 'COVID-19 Vaccination',
    titleMl: 'കോവിഡ്-19 വാക്സിനേഷൻ',
    date: '15/03/2024',
    hospital: 'Government General Hospital, Kochi',
    hospitalMl: 'ഗവൺമെന്റ് ജനറൽ ഹോസ്പിറ്റൽ, കൊച്ചി',
    status: 'completed',
    details: '2nd Booster Dose - Covishield'
  },
  {
    id: 2,
    type: 'test',
    title: 'Blood Test',
    titleMl: 'രക്തപരിശോധന',
    date: '02/03/2024',
    hospital: 'Primary Health Centre, Ernakulam',
    hospitalMl: 'പ്രൈമറി ഹെൽത്ത് സെന്റർ, എറണാകുളം',
    status: 'normal',
    details: 'Hemoglobin: 13.2 g/dL, Blood Sugar: Normal'
  },
  {
    id: 3,
    type: 'checkup',
    title: 'General Health Checkup',
    titleMl: 'പൊതു ആരോഗ്യ പരിശോധന',
    date: '20/02/2024',
    hospital: 'Community Health Centre, Thrissur',
    hospitalMl: 'കമ്മ്യൂണിറ്റി ഹെൽത്ത് സെന്റർ, തൃശൂർ',
    status: 'follow-up',
    details: 'BP: 130/85 mmHg - Mild hypertension, follow-up advised'
  }
];

const notifications = [
  {
    id: 1,
    type: 'vaccination',
    message: 'Annual flu vaccination due',
    messageMl: 'വാർഷിക ഫ്ലൂ വാക്സിനേഷൻ അടുത്ത തീയതി',
    date: '10/04/2024',
    priority: 'medium'
  },
  {
    id: 2,
    type: 'checkup',
    message: 'Follow-up for blood pressure monitoring',
    messageMl: 'രക്തസമ്മർദ്ദം നിരീക്ഷിക്കുന്നതിനുള്ള തുടർനടപടി',
    date: '05/04/2024',
    priority: 'high'
  }
];

export default function MigrantProfile() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleBack = () => {
    navigate('/');
  };

  const handleDownloadPDF = () => {
    alert('Health record PDF downloaded successfully!');
  };

  const handleDownloadQR = () => {
    alert('QR Health Card downloaded successfully!');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-health-good/10 text-health-good border-health-good/30';
      case 'normal':
        return 'bg-health-good/10 text-health-good border-health-good/30';
      case 'follow-up':
        return 'bg-health-warning/10 text-health-warning border-health-warning/30';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-health-critical/10 text-health-critical border-health-critical/30';
      case 'medium':
        return 'bg-health-warning/10 text-health-warning border-health-warning/30';
      default:
        return 'bg-health-good/10 text-health-good border-health-good/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-backwater">
      {/* Header */}
      <header className="bg-gradient-trust text-trust-navy-foreground shadow-medical">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <EnhancedButton variant="ghost" onClick={handleBack} className="gap-2 text-trust-navy-foreground hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
                Back
              </EnhancedButton>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-medical-white rounded-lg flex items-center justify-center p-1">
                  <img src={swasthyamLogo} alt="Swasthyam Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">Sahayam Profile</h1>
                  <p className="text-sm opacity-90">Worker Health Dashboard</p>
                </div>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="shadow-kerala mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-20 w-20 border-4 border-primary/20">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="text-lg bg-primary/10 text-primary">
                  {workerProfile.nameEn.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedLanguage === 'ml' ? workerProfile.name : workerProfile.nameEn}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">UHID:</span>
                    <span className="font-medium">{workerProfile.uhid}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{workerProfile.phoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{workerProfile.dateOfBirth}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">
                      {selectedLanguage === 'ml' ? workerProfile.employer : workerProfile.employerEn}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">
                      {selectedLanguage === 'ml' ? workerProfile.workLocation : workerProfile.workLocationEn}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <EnhancedButton variant="kerala" className="gap-2" onClick={handleDownloadPDF}>
                  <Download className="h-4 w-4" />
                  Download PDF
                </EnhancedButton>
                <EnhancedButton variant="trust" className="gap-2" onClick={handleDownloadQR}>
                  <QrCode className="h-4 w-4" />
                  Download QR Card
                </EnhancedButton>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="qr-card" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="qr-card">QR Health Card</TabsTrigger>
            <TabsTrigger value="health-records">Health Records</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
          </TabsList>

          <TabsContent value="qr-card">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Digital Health ID Card
                </CardTitle>
                <CardDescription>
                  Scannable QR code for instant hospital access
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="max-w-md mx-auto">
                  <img 
                    src={qrHealthCard} 
                    alt="QR Health Card" 
                    className="w-full border rounded-lg shadow-kerala"
                  />
                  <p className="text-sm text-muted-foreground mt-4">
                    Show this QR code at any hospital for instant access to your health records
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health-records">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Health Records
                </CardTitle>
                <CardDescription>
                  Complete history of vaccinations, tests, and treatments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthRecords.map((record) => (
                    <div key={record.id} className="border rounded-lg p-4 hover:bg-medical-accent/10 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-foreground">
                            {selectedLanguage === 'ml' ? record.titleMl : record.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {selectedLanguage === 'ml' ? record.hospitalMl : record.hospital}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getStatusColor(record.status)}>
                            {record.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{record.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{record.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Health Notifications
                </CardTitle>
                <CardDescription>
                  Vaccination reminders and follow-up alerts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className={getPriorityColor(notification.priority)}>
                          {notification.priority} priority
                        </Badge>
                        <span className="text-sm text-muted-foreground">{notification.date}</span>
                      </div>
                      <p className="text-sm text-foreground">
                        {selectedLanguage === 'ml' ? notification.messageMl : notification.message}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Siren className="h-5 w-5 text-health-critical" />
                  Emergency Information
                </CardTitle>
                <CardDescription>
                  Emergency contacts and critical health information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg p-4 bg-health-critical/5">
                  <h4 className="font-medium text-foreground mb-3">Emergency Contact</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="font-medium">
                        {selectedLanguage === 'ml' ? workerProfile.emergencyContact.name : workerProfile.emergencyContact.nameEn}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Relation:</span>
                      <span className="font-medium">
                        {selectedLanguage === 'ml' ? workerProfile.emergencyContact.relation : workerProfile.emergencyContact.relationEn}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-medium">{workerProfile.emergencyContact.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-health-warning/5">
                  <h4 className="font-medium text-foreground mb-3">Critical Health Alerts</h4>
                  <div className="flex items-center gap-2 text-health-warning">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-sm">Mild hypertension - requires monitoring</span>
                  </div>
                </div>

                <EnhancedButton variant="medical" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Call Emergency Helpline: 108
                </EnhancedButton>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}