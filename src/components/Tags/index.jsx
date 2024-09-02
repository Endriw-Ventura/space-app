
import styled from 'styled-components';
import tags from '../../dataJson/tags.json';
import Tag from '../Tag';
import SubtitleStyled from '../SubtitleStyled';

const TagsContainer = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`;

const Tags = ({onTagSearch}) => {
    return (
        <TagsContainer>
        <SubtitleStyled>Busque por tags:</SubtitleStyled>
            {tags.map(tag => <Tag onTagSearch={onTagSearch} key={tag.id} dataKey={tag.id} active={tag.id == 0}>{tag.titulo}</Tag>)}
        </TagsContainer>        
    );
}

export default Tags;