import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  User, 
  QrCode, 
  FileText, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  ArrowLeft,
  Activity,
  Heart,
  Thermometer,
  Stethoscope
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import qrHealthCard from '@/assets/qr-health-card.jpg';

// Mock data for demonstration
const workerData = {
  name: 'രാജേഷ് കുമാർ',
  nameEn: 'Rajesh Kumar',
  aadhaar: '****-****-8765',
  uhid: 'KL2024MH789456',
  photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  contact: {
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@email.com',
    address: 'Kozhikode, Kerala'
  },
  healthStatus: 'Good',
  lastCheckup: '2024-01-15',
  emergencyContact: {
    name: 'സുനിത കുമാർ (Sunita Kumar)',
    phone: '+91 98765 43211',
    relation: 'Spouse'
  }
};

const healthRecords = [
  {
    date: '2024-01-15',
    hospital: 'Government Medical College, Kozhikode',
    type: 'Health Checkup',
    status: 'Normal',
    doctor: 'Dr. Priya Nair'
  },
  {
    date: '2024-01-10',
    hospital: 'Primary Health Centre, Kakkanad',
    type: 'COVID-19 Test',
    status: 'Negative',
    doctor: 'Dr. Suresh Kumar'
  },
  {
    date: '2023-12-20',
    hospital: 'District Hospital, Ernakulam',
    type: 'Blood Test',
    status: 'Normal',
    doctor: 'Dr. Anitha Mol'
  }
];

export default function MigrantProfile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleDownloadQR = () => {
    // Simulate QR code download
    alert('QR Health Card downloaded successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-backwater">
      {/* Header */}
      <header className="bg-medical-white shadow-medical">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <EnhancedButton variant="ghost" onClick={handleBack} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </EnhancedButton>
              <div>
                <h1 className="text-xl font-bold text-foreground">Health Profile</h1>
                <p className="text-sm text-muted-foreground">Kerala Migrant Health System</p>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-kerala">
              <CardHeader className="text-center">
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <img
                    src={workerData.photo}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-health-good rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">
                  {workerData.name}
                  <span className="block text-base font-normal text-muted-foreground mt-1">
                    {workerData.nameEn}
                  </span>
                </CardTitle>
                <Badge variant="outline" className="bg-health-good/10 text-health-good border-health-good/30">
                  <Activity className="h-3 w-3 mr-1" />
                  Health Status: {workerData.healthStatus}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>Aadhaar: {workerData.aadhaar}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>UHID: {workerData.uhid}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{workerData.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{workerData.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{workerData.contact.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QR Health Card */}
            <Card className="shadow-medical mt-6">
              <CardHeader className="text-center">
                <QrCode className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">QR Health Card</CardTitle>
                <CardDescription>
                  Show this QR code at any healthcare facility
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-medical-accent rounded-lg p-6 mb-4">
                  <img 
                    src={qrHealthCard} 
                    alt="QR Health Card" 
                    className="w-32 h-32 mx-auto rounded-lg"
                  />
                </div>
                <EnhancedButton variant="kerala" className="w-full gap-2" onClick={handleDownloadQR}>
                  <Download className="h-4 w-4" />
                  Download QR Card
                </EnhancedButton>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="records" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="records">Health Records</TabsTrigger>
                <TabsTrigger value="emergency">Emergency Info</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="records">
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="h-5 w-5" />
                      Recent Health Records
                    </CardTitle>
                    <CardDescription>
                      Your recent medical consultations and test results
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {healthRecords.map((record, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:bg-medical-accent/20 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium text-foreground">{record.type}</h4>
                              <p className="text-sm text-muted-foreground">{record.hospital}</p>
                            </div>
                            <Badge 
                              variant="outline" 
                              className={record.status === 'Normal' || record.status === 'Negative' 
                                ? 'bg-health-good/10 text-health-good border-health-good/30' 
                                : 'bg-health-warning/10 text-health-warning border-health-warning/30'
                              }
                            >
                              {record.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {record.date}
                            </span>
                            <span>Dr. {record.doctor}</span>
                          </div>
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
                      <Phone className="h-5 w-5" />
                      Emergency Contact Information
                    </CardTitle>
                    <CardDescription>
                      Contact details for medical emergencies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-health-critical/5 border border-health-critical/20 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">Primary Emergency Contact</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Name:</strong> {workerData.emergencyContact.name}</p>
                        <p><strong>Phone:</strong> {workerData.emergencyContact.phone}</p>
                        <p><strong>Relation:</strong> {workerData.emergencyContact.relation}</p>
                      </div>
                    </div>
                    
                    <div className="bg-trust-navy/5 border border-trust-navy/20 rounded-lg p-4">
                      <h4 className="font-medium text-foreground mb-2">Emergency Helplines</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Kerala Health Emergency:</strong> 104</p>
                        <p><strong>National Emergency:</strong> 108</p>
                        <p><strong>Migrant Helpline:</strong> 1800-425-1966</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                    <CardDescription>
                      Manage your profile preferences and privacy settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <EnhancedButton variant="medical" className="w-full justify-start">
                        Update Contact Information
                      </EnhancedButton>
                      <EnhancedButton variant="medical" className="w-full justify-start">
                        Change Language Preference
                      </EnhancedButton>
                      <EnhancedButton variant="medical" className="w-full justify-start">
                        Privacy Settings
                      </EnhancedButton>
                      <EnhancedButton variant="medical" className="w-full justify-start">
                        Export Health Data
                      </EnhancedButton>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}