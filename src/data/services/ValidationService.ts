export const ValidationServiice = {
    cep ( cep = '' ): boolean{
        return cep.replace( /\D/g, '' ).length === 8;
    },
};