import { create } from 'zustand';

interface FunnelState {
  // Step 1
  industry: string;
  industryNote: string;
  
  // Step 2
  goals: string[];
  
  // Step 3
  features: {
    essentials: string[];
    other: string;
  };
  
  // Step 4
  integrations: {
    preset: string;
    selected: string[];
  };
  
  // Step 5
  contact: {
    fullName: string;
    email: string;
    company: string;
    website: string;
    whatsapp: string;
    preferredTime: string;
    notes: string;
    consents: {
      contactAgreed: boolean;
      emailCopy: boolean;
      nda: boolean;
    };
  };
  
  // Navigation
  currentStep: number;
  setCurrentStep: (step: number) => void;
  updateIndustry: (industry: string, note?: string) => void;
  updateGoals: (goals: string[]) => void;
  updateFeatures: (essentials: string[], other: string) => void;
  updateIntegrations: (preset: string, selected: string[]) => void;
  updateContact: (contact: Partial<FunnelState['contact']>) => void;
  resetFunnel: () => void;
}

const defaultEssentials = [
  'WhatsApp Cloud API connection + webhook',
  '3 approved message templates with personalization',
  'Knowledge base from your docs/URLs (RAG)',
  'Admin panel: Inbox, Contacts/Lists, Templates, Knowledge, Flows, Campaigns, Reports, Roles',
  'Reporting (sends, delivered, replies, conversions)',
];

export const useFunnelStore = create<FunnelState>((set) => ({
  industry: '',
  industryNote: '',
  goals: [],
  features: {
    essentials: defaultEssentials,
    other: '',
  },
  integrations: {
    preset: '',
    selected: [],
  },
  contact: {
    fullName: '',
    email: '',
    company: '',
    website: '',
    whatsapp: '',
    preferredTime: '',
    notes: '',
    consents: {
      contactAgreed: false,
      emailCopy: false,
      nda: false,
    },
  },
  currentStep: 1,
  
  setCurrentStep: (step) => set({ currentStep: step }),
  
  updateIndustry: (industry, note = '') => 
    set({ industry, industryNote: note }),
  
  updateGoals: (goals) => set({ goals }),
  
  updateFeatures: (essentials, other) => 
    set({ features: { essentials, other } }),
  
  updateIntegrations: (preset, selected) => 
    set({ integrations: { preset, selected } }),
  
  updateContact: (contact) => 
    set((state) => ({ 
      contact: { ...state.contact, ...contact } 
    })),
  
  resetFunnel: () => set({
    industry: '',
    industryNote: '',
    goals: [],
    features: {
      essentials: defaultEssentials,
      other: '',
    },
    integrations: {
      preset: '',
      selected: [],
    },
    contact: {
      fullName: '',
      email: '',
      company: '',
      website: '',
      whatsapp: '',
      preferredTime: '',
      notes: '',
      consents: {
        contactAgreed: false,
        emailCopy: false,
        nda: false,
      },
    },
    currentStep: 1,
  }),
}));
