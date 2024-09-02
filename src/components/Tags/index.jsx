
import styled from 'styled-components';
import Tag from '../Tag';
import SubtitleStyled from '../SubtitleStyled';
import { useState } from 'react';

const TagsContainer = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`;

const Tags = ({tags, onTagSearch}) => {
    return (
        <TagsContainer>
        <SubtitleStyled>Busque por tags:</SubtitleStyled>
            {tags.map(tag => <Tag onTagSearch={onTagSearch} key={tag.id} dataKey={tag.id} active={tag.active}>{tag.titulo}</Tag>)}
        </TagsContainer>        
    );
}

export default Tags;