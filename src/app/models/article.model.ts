export interface Article {
    id: number;
    title: string;
    content: string;
    isPublic: boolean; // Pour gérer la visibilité
    allowComments: boolean; // Pour gérer les commentaires
    likes: number; // Nombre de likes
    comments: number; // Nombre de commentaires
}