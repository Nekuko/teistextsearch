import React from 'react';


const MultiCharacterBox = ({ characters, activeCharacter, characterImages }) => {
    if (characters.length === 1) {
        return (
            <div className="character-box">
                {characterImages[activeCharacter.name_variant] && (
                    <img src={characterImages[activeCharacter.name_variant]} alt={activeCharacter.name_variant || 'Narrator'} />
                )}
                {(!characterImages[activeCharacter.name_variant] && characterImages[activeCharacter.name]) && (
                    <img src={characterImages[activeCharacter.name]} alt={activeCharacter.name || 'Narrator'} />
                )}
                <p title={activeCharacter.name !== activeCharacter.name_variant ? `${activeCharacter.name_variant} (${activeCharacter.name})` : activeCharacter.name}>
                    {activeCharacter.name !== activeCharacter.name_variant ? `${activeCharacter.name_variant}` : activeCharacter.name}
                </p>
            </div>
        );
    } else {
        return (
            <div className="character-box">
                {characterImages[activeCharacter.name_variant] && (
                    <img src={characterImages[activeCharacter.name_variant]} alt={activeCharacter.name_variant || 'Narrator'} />
                )}
                {(!characterImages[activeCharacter.name_variant] && characterImages[activeCharacter.name]) && (
                    <img src={characterImages[activeCharacter.name]} alt={activeCharacter.name || 'Narrator'} />
                )}
                <p title={activeCharacter.name !== activeCharacter.name_variant ? `${activeCharacter.name_variant} (${activeCharacter.name})` : activeCharacter.name}>
                    {activeCharacter.name !== activeCharacter.name_variant ? `${activeCharacter.name_variant}` : activeCharacter.name}
                </p>
            </div>
        );
    }
};

export default MultiCharacterBox;