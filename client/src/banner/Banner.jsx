
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    //  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    //   background: url(https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center/55% repeat-x #000;


      // background: url(https://images.pexels.com/photos/5240543/pexels-photo-5240543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center/55% repeat-x #000;
    //    background: url(https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center/55% repeat-x #000;
    //    background: url(https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center/55% repeat-x #000;
    //    background: url(https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center/55% repeat-x #000;
    //    background: url(https://www.pexels.com/photo/black-flat-screen-computer-monitor-13620269/) center/55% repeat-x #000;
    //   background: url(https://images.pexels.com/photos/13620269/pexels-photo-13620269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center/55% repeat-x #000;
      background: url(https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) center/55% repeat-x #000;
    //   background: url() center/55% repeat-x #000;
    //   background: url() center/55% repeat-x #000;
    //   background: url() center/55% repeat-x #000;
    //   background: url() center/55% repeat-x #000;
    //   background: url() center/55% repeat-x #000;
    //   background: url() center/55% repeat-x #000;




    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 20px;
    color: black;
    line-height: 2;
    align-items: center;
    justify-content: center;

`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            {/* <Heading>Blog Website</Heading> */}
            {/* <SubHeading>Code for Interview</SubHeading> */}
        </Image>
    )
}

export default Banner;