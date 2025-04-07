export interface User {

    
    fullName: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    id: number
}

export interface UserLogin{
    User: {
        email: string;
    password: string;
    createdAt: string;
    updatedAt: string
    };
    token: {
        type: string;
        name: null;
        token: string;
        abilities: string[];
        lastUsedAt: null;
        expiresAt: null;
      };
    
}
