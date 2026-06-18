import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import type { RegistrationFormData, EmergencyContact } from '@/types';

const STEPS = ['Parent Details', 'Child Details', 'Medical Info', 'Emergency Contacts', 'Consent', 'Sessions'];

const emptyForm: RegistrationFormData = {
  parent: { firstName: '', lastName: '', email: '', phone: '', address: '' },
  child: { firstName: '', lastName: '', dateOfBirth: '', gender: '' },
  medical: { allergies: '', medicalConditions: '', medications: '', dietaryRequirements: '' },
  emergencyContacts: [{ name: '', relationship: '', phone: '' }],
  consent: { dataProcessing: false, photoConsent: false, emergencyTreatment: false, termsAccepted: false },
  sessions: { preferredDays: [], sessionType: '', startDate: '', notes: '' },
};

export function RegistrationPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<RegistrationFormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const updateParent = (field: keyof RegistrationFormData['parent'], value: string) =>
    setForm((f) => ({ ...f, parent: { ...f.parent, [field]: value } }));

  const updateChild = (field: keyof RegistrationFormData['child'], value: string) =>
    setForm((f) => ({ ...f, child: { ...f.child, [field]: value } }));

  const updateMedical = (field: keyof RegistrationFormData['medical'], value: string) =>
    setForm((f) => ({ ...f, medical: { ...f.medical, [field]: value } }));

  const updateContact = (index: number, field: keyof EmergencyContact, value: string) =>
    setForm((f) => {
      const contacts = [...f.emergencyContacts];
      contacts[index] = { ...contacts[index], [field]: value };
      return { ...f, emergencyContacts: contacts };
    });

  const addContact = () =>
    setForm((f) => ({ ...f, emergencyContacts: [...f.emergencyContacts, { name: '', relationship: '', phone: '' }] }));

  const toggleDay = (day: string) =>
    setForm((f) => ({
      ...f,
      sessions: {
        ...f.sessions,
        preferredDays: f.sessions.preferredDays.includes(day)
          ? f.sessions.preferredDays.filter((d) => d !== day)
          : [...f.sessions.preferredDays, day],
      },
    }));

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <>
        <PageHero ghostText="REGISTER" title="Registration Submitted" compact />
        <div className="py-20 mx-auto max-w-2xl px-4 text-center">
          <CheckCircle className="h-16 w-16 text-sage mx-auto mb-4" />
          <p className="text-berry/70">Thank you, {form.parent.firstName}! We've received registration for {form.child.firstName}. Our team will review availability and contact you within 5 working days.</p>
          <Link to="/" className="inline-block mt-8"><Button>Return Home</Button></Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero ghostText="REGISTER" title="Child Registration" subtitle="Complete all steps to register your child at Rosebery." compact />
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-3xl px-4">
          {/* Progress */}
          <div className="mb-8 flex flex-wrap gap-2">
            {STEPS.map((s, i) => (
              <div key={s} className={`rounded-full px-4 py-2 text-xs font-semibold transition-smooth ${i <= step ? 'gradient-rose text-white' : 'bg-white/60 text-berry/50'}`}>
                {i + 1}. {s}
              </div>
            ))}
          </div>

          <div className="glass rounded-[var(--radius-panel)] p-8 space-y-6">
            {step === 0 && (
              <>
                <h2 className="font-display text-2xl text-berry">Parent / Guardian Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="First Name" value={form.parent.firstName} onChange={(e) => updateParent('firstName', e.target.value)} required />
                  <Input label="Last Name" value={form.parent.lastName} onChange={(e) => updateParent('lastName', e.target.value)} required />
                </div>
                <Input label="Email" type="email" value={form.parent.email} onChange={(e) => updateParent('email', e.target.value)} required />
                <Input label="Phone" value={form.parent.phone} onChange={(e) => updateParent('phone', e.target.value)} required />
                <Textarea label="Address" value={form.parent.address} onChange={(e) => updateParent('address', e.target.value)} required />
              </>
            )}
            {step === 1 && (
              <>
                <h2 className="font-display text-2xl text-berry">Child Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="First Name" value={form.child.firstName} onChange={(e) => updateChild('firstName', e.target.value)} required />
                  <Input label="Last Name" value={form.child.lastName} onChange={(e) => updateChild('lastName', e.target.value)} required />
                </div>
                <Input label="Date of Birth" type="date" value={form.child.dateOfBirth} onChange={(e) => updateChild('dateOfBirth', e.target.value)} required />
                <Select label="Gender" value={form.child.gender} onChange={(e) => updateChild('gender', e.target.value)} options={[
                  { value: '', label: 'Select...' },
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Prefer not to say' },
                ]} />
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="font-display text-2xl text-berry">Medical & Allergy Information</h2>
                <Textarea label="Allergies" value={form.medical.allergies} onChange={(e) => updateMedical('allergies', e.target.value)} placeholder="List any allergies or write 'None'" />
                <Textarea label="Medical Conditions" value={form.medical.medicalConditions} onChange={(e) => updateMedical('medicalConditions', e.target.value)} />
                <Textarea label="Medications" value={form.medical.medications} onChange={(e) => updateMedical('medications', e.target.value)} />
                <Textarea label="Dietary Requirements" value={form.medical.dietaryRequirements} onChange={(e) => updateMedical('dietaryRequirements', e.target.value)} />
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="font-display text-2xl text-berry">Emergency Contacts</h2>
                {form.emergencyContacts.map((contact, i) => (
                  <div key={i} className="space-y-4 p-4 rounded-2xl bg-white/40">
                    <p className="text-sm font-semibold text-berry">Contact {i + 1}</p>
                    <Input label="Name" value={contact.name} onChange={(e) => updateContact(i, 'name', e.target.value)} required />
                    <Input label="Relationship" value={contact.relationship} onChange={(e) => updateContact(i, 'relationship', e.target.value)} required />
                    <Input label="Phone" value={contact.phone} onChange={(e) => updateContact(i, 'phone', e.target.value)} required />
                  </div>
                ))}
                <Button variant="outline" type="button" onClick={addContact}>Add Another Contact</Button>
              </>
            )}
            {step === 4 && (
              <>
                <h2 className="font-display text-2xl text-berry">Consent & Agreements</h2>
                {[
                  { key: 'dataProcessing' as const, label: 'I consent to Rosebery processing my family\'s personal data for childcare purposes.' },
                  { key: 'photoConsent' as const, label: 'I consent to photos being taken for internal records (optional).' },
                  { key: 'emergencyTreatment' as const, label: 'I authorise emergency medical treatment if required.' },
                  { key: 'termsAccepted' as const, label: 'I accept Rosebery terms and house rules.' },
                ].map((item) => (
                  <label key={item.key} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent[item.key]}
                      onChange={(e) => setForm((f) => ({ ...f, consent: { ...f.consent, [item.key]: e.target.checked } }))}
                      className="mt-1 h-5 w-5 rounded accent-rose"
                    />
                    <span className="text-sm text-berry/80">{item.label}</span>
                  </label>
                ))}
              </>
            )}
            {step === 5 && (
              <>
                <h2 className="font-display text-2xl text-berry">Preferred Sessions</h2>
                <div>
                  <p className="text-sm font-semibold text-berry mb-3">Preferred Days</p>
                  <div className="flex flex-wrap gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleDay(day)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-smooth ${form.sessions.preferredDays.includes(day) ? 'gradient-rose text-white' : 'bg-white/60 text-berry'}`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                <Select label="Session Type" value={form.sessions.sessionType} onChange={(e) => setForm((f) => ({ ...f, sessions: { ...f.sessions, sessionType: e.target.value } }))} options={[
                  { value: '', label: 'Select...' },
                  { value: 'full-time', label: 'Full Time' },
                  { value: 'part-time', label: 'Part Time' },
                  { value: 'extended', label: 'Extended Hours' },
                  { value: 'after-school', label: 'After School' },
                  { value: 'holiday', label: 'Holiday Care' },
                ]} />
                <Input label="Preferred Start Date" type="date" value={form.sessions.startDate} onChange={(e) => setForm((f) => ({ ...f, sessions: { ...f.sessions, startDate: e.target.value } }))} />
                <Textarea label="Additional Notes" value={form.sessions.notes} onChange={(e) => setForm((f) => ({ ...f, sessions: { ...f.sessions, notes: e.target.value } }))} />
              </>
            )}

            <div className="flex justify-between pt-4 border-t border-berry/10">
              <Button variant="ghost" type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
              {step < STEPS.length - 1 ? (
                <Button type="button" onClick={() => setStep(step + 1)}>Next <ChevronRight className="h-4 w-4" /></Button>
              ) : (
                <Button type="button" onClick={handleSubmit}>Submit Registration</Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
