import styled from 'styled-components';

export const ProjectContainer = styled.div`

`
export const ProjectHeader = styled.div`

`
export const Title = styled.h2`
    font-size:3rem;
    font-weight:bold;
    text-align:center;
    margin-top:1.5rem;
    margin-bottom:1.5rem;
`
export const ProjectInfo = styled.div`

`
export const Text = styled.p`
    font-size:1.2rem;
`
export const ProcejtPhoto = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin:40px 0;
`
export const Img = styled.img`
    max-height:100%;
    max-width:100%;
`
export const ImgWrapper = styled.div`
    height:300px;
    padding:0 10px 20px 10px;

    @media screen and (max-width: 400px){
        height:200px;
        padding:10px 2px;
    }
`