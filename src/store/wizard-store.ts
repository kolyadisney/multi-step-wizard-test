import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { WizardData } from '@/validation';

const initialFormData: Partial<WizardData> = {
    // User Details
    firstName: '',
    lastName: '',
    email: '',

    // Address Details
    street: '',
    city: '',
    state: '',
    zipCode: '',

    // Account Details
    username: '',
    password: '',
    confirmPassword: '',
};

export interface WizardStore {
    activeStep: number;
    setActiveStep: (step: number) => void;
    formData: Partial<WizardData>;
    updateFormData: (data: Partial<WizardData>) => void;
    resetFormData: () => void;
    themeMode: 'light' | 'dark';
    setThemeMode: (mode: 'light' | 'dark') => void;
}

const useWizardStore = create<WizardStore>()(
    devtools(
        (set) => ({
            activeStep: 0,
            setActiveStep: (step: number) => set({ activeStep: step }),
            formData: initialFormData,
            updateFormData: (data: Partial<WizardData>) =>
                set((state) => ({ formData: { ...state.formData, ...data } })),
            resetFormData: () => set({ formData: initialFormData }),
            themeMode: 'light',
            setThemeMode: (mode: 'light' | 'dark') => set({ themeMode: mode }),
        }),
        {
            name: 'wizard-store',
        },
    ),
);

export default useWizardStore;
