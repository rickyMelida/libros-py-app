'use client'

import { useState, useEffect } from "react";
import { ICredential } from "@/models/interfaces/ICredential";
import { signInService, signOutService } from "@/services/authService";

export const usefetchAuth = ({ userCredentials }: { userCredentials: ICredential }) => {
    const [patient, setPatient] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPatient = async () => {
            try {
                const data = await signInService(userCredentials);
                if(data)
                    setPatient(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        getPatient();
    }, []);
    
    return { patient, loading, error };
};

export const useFetchAllPatients = () => {
    const [patients, setPatients] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const getPatient = async () => {
            try {
                const data = await signOutService();
                setPatients(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        getPatient();
    }, []);
    
    return { patients, loading, error };
};

