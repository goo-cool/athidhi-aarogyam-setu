import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { 
  Upload, 
  Search, 
  FileText, 
  User, 
  Calendar,
  ArrowLeft,
  Stethoscope,
  Activity,
  Users,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  QrCode,
  Flag,
  Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import swasthyamLogo from '@/assets/swasthyam-logo.png';

// Mock data
const recentPatients = [
  {
    id: 'KL2024001234',
    name: 'രാജേഷ് കുമാർ (Rajesh Kumar)',
    lastVisit: '2024-01-15',
    status: 'Normal',
    tests: ['Blood Test', 'COVID-19 Test'],
    flagged: false
  },
  {
    id: 'KL2024001235',
    name: 'अमित शर्मा (Amit Sharma)', 
    lastVisit: '2024-01-14',
    status: 'Follow-up Required',
    tests: ['X-Ray', 'Blood Pressure'],
    flagged: false
  },
  {
    id: 'KL2024001236',
    name: 'রহিম আহমেদ (Rahim Ahmed)',
    lastVisit: '2024-01-13',
    status: 'Critical',
    tests: ['ECG', 'Blood Test'],
    flagged: true
  }
];

const hospitalStats = {
  totalPatients: 1247,
  todayVisits: 42,
  pendingReports: 18,
  emergencyCases: 3,
  flaggedCases: 5
};

export default function HospitalDashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [uploadForm, setUploadForm] = useState({
    patientId: '',
    testType: '',
    results: '',
    doctor: '',
    notes: '',
    isFlagged: false
  });

  const handleBack = () => {
    navigate('/');
  };

  const handleUpload = () => {
    alert('Test results uploaded successfully!');
    setUploadForm({
      patientId: '',
      testType: '',
      results: '',
      doctor: '',
      notes: '',
      isFlagged: false
    });
  };

  const handleQRScan = () => {
    alert('QR Scanner would open here for instant patient lookup');
  };

  const handleFlagCase = (patientId: string) => {
    alert(`Patient ${patientId} flagged for infectious disease monitoring`);
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
                  <h1 className="text-lg font-bold">Hospital Dashboard</h1>
                  <p className="text-sm opacity-90">Government Medical College, Kozhikode</p>
                </div>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="shadow-medical">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Patients</p>
                  <p className="text-2xl font-bold text-foreground">{hospitalStats.totalPatients}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medical">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today's Visits</p>
                  <p className="text-2xl font-bold text-foreground">{hospitalStats.todayVisits}</p>
                </div>
                <Activity className="h-8 w-8 text-health-good" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medical">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending Reports</p>
                  <p className="text-2xl font-bold text-foreground">{hospitalStats.pendingReports}</p>
                </div>
                <FileText className="h-8 w-8 text-health-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medical">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Emergency Cases</p>
                  <p className="text-2xl font-bold text-foreground">{hospitalStats.emergencyCases}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-health-critical" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medical">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Flagged Cases</p>
                  <p className="text-2xl font-bold text-foreground">{hospitalStats.flaggedCases}</p>
                </div>
                <Flag className="h-8 w-8 text-health-critical" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="search" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="search">Search Workers</TabsTrigger>
            <TabsTrigger value="upload">Upload Results</TabsTrigger>
            <TabsTrigger value="patients">Patient Records</TabsTrigger>
            <TabsTrigger value="reports">Hospital Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="search">
            <Card className="shadow-kerala">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Workers
                </CardTitle>
                <CardDescription>
                  Search workers by ID, name, or scan QR Health Card
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search by UHID, name, or phone number..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <EnhancedButton variant="trust" className="gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </EnhancedButton>
                  <EnhancedButton variant="kerala" className="gap-2" onClick={handleQRScan}>
                    <QrCode className="h-4 w-4" />
                    Scan QR
                  </EnhancedButton>
                </div>

                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="border rounded-lg p-4 hover:bg-medical-accent/20 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-foreground flex items-center gap-2">
                            {patient.name}
                            {patient.flagged && <Flag className="h-4 w-4 text-health-critical" />}
                          </h4>
                          <p className="text-sm text-muted-foreground">UHID: {patient.id}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={
                              patient.status === 'Normal' 
                                ? 'bg-health-good/10 text-health-good border-health-good/30'
                                : patient.status === 'Critical'
                                ? 'bg-health-critical/10 text-health-critical border-health-critical/30'
                                : 'bg-health-warning/10 text-health-warning border-health-warning/30'
                            }
                          >
                            {patient.status}
                          </Badge>
                          {patient.status === 'Critical' && (
                            <EnhancedButton 
                              size="sm" 
                              variant="medical" 
                              onClick={() => handleFlagCase(patient.id)}
                            >
                              Flag Case
                            </EnhancedButton>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Last Visit: {patient.lastVisit}
                        </span>
                        <span>Tests: {patient.tests.join(', ')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload">
            <Card className="shadow-kerala">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Test Results
                </CardTitle>
                <CardDescription>
                  Upload medical test results and health records for migrant workers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="patientId">Patient UHID</Label>
                    <Input
                      id="patientId"
                      placeholder="Enter Patient UHID"
                      value={uploadForm.patientId}
                      onChange={(e) => setUploadForm({...uploadForm, patientId: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="testType">Test Type</Label>
                    <Select onValueChange={(value) => setUploadForm({...uploadForm, testType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select test type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blood-test">Blood Test</SelectItem>
                        <SelectItem value="covid-test">COVID-19 Test</SelectItem>
                        <SelectItem value="xray">X-Ray</SelectItem>
                        <SelectItem value="ecg">ECG</SelectItem>
                        <SelectItem value="general-checkup">General Checkup</SelectItem>
                        <SelectItem value="vaccination">Vaccination</SelectItem>
                        <SelectItem value="infectious-disease">Infectious Disease Test</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="doctor">Doctor Name</Label>
                  <Input
                    id="doctor"
                    placeholder="Enter attending doctor's name"
                    value={uploadForm.doctor}
                    onChange={(e) => setUploadForm({...uploadForm, doctor: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="results">Test Results</Label>
                  <Textarea
                    id="results"
                    placeholder="Enter detailed test results..."
                    value={uploadForm.results}
                    onChange={(e) => setUploadForm({...uploadForm, results: e.target.value})}
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional medical notes or recommendations..."
                    value={uploadForm.notes}
                    onChange={(e) => setUploadForm({...uploadForm, notes: e.target.value})}
                    rows={3}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="flagCase"
                    checked={uploadForm.isFlagged}
                    onChange={(e) => setUploadForm({...uploadForm, isFlagged: e.target.checked})}
                  />
                  <Label htmlFor="flagCase" className="text-sm text-health-critical">
                    Flag as infectious disease case
                  </Label>
                </div>

                <div className="flex gap-4">
                  <EnhancedButton variant="kerala" className="gap-2" onClick={handleUpload}>
                    <Upload className="h-4 w-4" />
                    Upload Results
                  </EnhancedButton>
                  <EnhancedButton variant="medical">
                    Save as Draft
                  </EnhancedButton>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Patient Records
                </CardTitle>
                <CardDescription>
                  View and manage migrant worker health records
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-foreground">{patient.name}</h4>
                          <p className="text-sm text-muted-foreground">UHID: {patient.id}</p>
                        </div>
                        <div className="flex gap-2">
                          <EnhancedButton size="sm" variant="trust">
                            View History
                          </EnhancedButton>
                          <EnhancedButton size="sm" variant="medical">
                            Add Record
                          </EnhancedButton>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Last Visit: {patient.lastVisit} | Status: {patient.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Hospital Reports
                </CardTitle>
                <CardDescription>
                  Generate hospital-wise statistics and reports
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Daily Reports</h4>
                    <div className="space-y-2">
                      <EnhancedButton variant="medical" className="w-full justify-start gap-2">
                        <Download className="h-4 w-4" />
                        Daily Patient Summary
                      </EnhancedButton>
                      <EnhancedButton variant="medical" className="w-full justify-start gap-2">
                        <Download className="h-4 w-4" />
                        Test Results Report
                      </EnhancedButton>
                      <EnhancedButton variant="medical" className="w-full justify-start gap-2">
                        <Download className="h-4 w-4" />
                        Emergency Cases Log
                      </EnhancedButton>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Compliance Reports</h4>
                    <div className="space-y-2">
                      <EnhancedButton variant="trust" className="w-full justify-start gap-2">
                        <Download className="h-4 w-4" />
                        Vaccination Records
                      </EnhancedButton>
                      <EnhancedButton variant="trust" className="w-full justify-start gap-2">
                        <Download className="h-4 w-4" />
                        Flagged Cases Report
                      </EnhancedButton>
                      <EnhancedButton variant="trust" className="w-full justify-start gap-2">
                        <Download className="h-4 w-4" />
                        Monthly Statistics
                      </EnhancedButton>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4" />
                    All reports are automatically synced with the Kerala Health Department and stored in DigiLocker
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}