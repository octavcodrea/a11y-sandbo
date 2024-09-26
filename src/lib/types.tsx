export type EmailExampleType = {
    id: string;

    from: string;
    fromEmail: string;

    subject: string;
    date: string;

    message: string;

    favorite?: boolean;

    read?: boolean;
    category?: EmailCategoryIdType;
};

export type EmailCategoryIdType = "promotions" | "social" | "updates";

export type EmailCategoryType = EmailCategoryIdType | null;

export type EmailCategoryObjectType = {
    id: EmailCategoryType;
    name: string;
    icon: React.ReactElement;
};
