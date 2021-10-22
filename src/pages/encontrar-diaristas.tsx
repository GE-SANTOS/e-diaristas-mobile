import React, { useState } from "react";
import { Text, View } from 'react-native';
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import TextInput from "ui/components/inputs/TextInput/TextInput";
import { TextInputMask } from "react-native-masked-text";

const EncontrarDiaristas: React.FC = () => {
    const [ cep, setCep ] = useState( '' );

    return (
        <View>
            <PageTitle
                title={ 'Conheça os profissionais' }
                subtitle={
                    'Preencha seu endereço e veja todos os profissionais da sua localidade'
                }
            />

            <TextInputMask
                value={ cep }
                onChangeText={ setCep }
                type={ 'custom' }
                options={ {
                    mask: '99.999-999',
                } }
                
                customTextInput={ TextInput }
                customTextInputProps={ {
                    label: 'Digite seu CEP'
                }}
                

            />
        </View>
    );
};

export default EncontrarDiaristas;