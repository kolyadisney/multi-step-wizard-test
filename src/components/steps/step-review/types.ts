import React from "react";

export interface ReviewCardProps {
    title: string;
    icon: React.ReactNode;
    data: Array<{ label: string; value: string | undefined }>;
}
