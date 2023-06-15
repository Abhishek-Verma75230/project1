
import { styled, Box, Typography } from '@mui/material';
import React from 'react';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600;

`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
    whiteSpace: 'pre-wrap'
`;

const Singlepost = ({ post }) => {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
         return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    // const addLineBreaks = (text) => {
    //     const lines = text.split('\n');
    //     return lines.map((line, index) => (
    //       <React.Fragment key={index}>
    //         {line}
    //         <br /> {/* Add a <br /> element to create a line break */}
    //       </React.Fragment>
    //     ));
    //   };

    // const addLineBreaks = (text) => {
    //     const lines = text.split('<br>');
    //     return lines.map((line, index) => (
    //       <React.Fragment key={index}>
    //         {line}
    //         <br /> {/* Add a <br /> element to create a line break */}
    //       </React.Fragment>
    //     ));
    //   };

    // const addLineBreaks = (text) => {
    //     const lines = text.split('\n');
    //     return lines.map((line, index) => (
    //       <React.Fragment key={index}>
    //         {line}
    //         <br /> {/* Add a <br /> element to create a line break */}
    //       </React.Fragment>
    //     ));
    //   };

    const addLineBreaks = (text) => {
        const lines = text.split('\n');
        return lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br /> {/* Add a <br /> element to create a line break */}
          </React.Fragment>
        ));
      };
      
      
      

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
            {/* <Details>{addLineBreaks(post.description)}</Details> */}
            {/* <Details dangerouslySetInnerHTML={{ __html: addLineBreaks(post.description) }} /> */}
            {/* <Details dangerouslySetInnerHTML={{ __html: addLineBreaks(post.description).join('') }} /> */}
            {/* <Details>{addLineBreaks(post.description)}</Details> */}
   



        </Container>
    )
}

export default Singlepost;




// import { styled, Box, Typography } from '@mui/material';
// import React from 'react';

// const Container = styled(Box)`
//     border: 1px solid #d3cede;
//     border-radius: 10px;
//     margin: 10px;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     height: 350px;
//     & > img, & > p {
//         padding: 0 5px 5px 5px;
//     }
// `;

// const Image = styled('img')({
//     width: '100%',
//     objectFit: 'cover',
//     borderRadius: '10px 10px 0 0',
//     height: 150
// });

// const Text = styled(Typography)`
//     color: #878787
//     font-size: 12px;
// `;

// const Heading = styled(Typography)`
//     font-size: 18px;
//     font-weight: 600;
// `;

// const Details = styled(Typography)`
//     font-size: 14px;
//     word-break: break-word;
//     whiteSpace: 'pre-wrap';
// `;

// const Singlepost = ({ post }) => {
//     const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
//     const addEllipsis = (str, limit) => {
//          return str.length > limit ? str.substring(0, limit) + '...' : str;
//     } 

//     // const addLineBreaks = (text) => {
//     //     const lines = text.split('\n');
//     //     return lines.map((line, index) => (
//     //       <React.Fragment key={index}>
//     //         {line}
//     //         <br /> {/* Add a <br /> element to create a line break */}
//     //       </React.Fragment>
//     //     ));
//     // };

//     const addLineBreaks = (text) => {
//         const lines = text.split('\n');
//         return lines.map((line, index) => (
//           <React.Fragment key={index}>
//             {line}
//             <br /> {/* Add a <br /> element to create a line break */}
//           </React.Fragment>
//         ));
//       };
      
      
//     return (
//         <Container>
//             <Image src={url} alt="post" />
//             <Text>{post.categories}</Text>
//             <Heading>{addEllipsis(post.title, 20)}</Heading>
//             <Text>Author: {post.username}</Text>
//             <Details>{addLineBreaks(post.description)}</Details>
//         </Container>
//     );
// };

// export default Singlepost;












// import { styled, Box, Typography } from '@mui/material';
// import React from 'react';

// const Container = styled(Box)`
//   border: 1px solid #d3cede;
//   border-radius: 10px;
//   margin: 10px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   height: 350px;
//   & > img,
//   & > p {
//     padding: 0 5px 5px 5px;
//   }
// `;

// const Image = styled('img')({
//   width: '100%',
//   objectFit: 'cover',
//   borderRadius: '10px 10px 0 0',
//   height: 150,
// });

// const Text = styled(Typography)`
//   color: #878787;
//   font-size: 12px;
// `;

// const Heading = styled(Typography)`
//   font-size: 18px;
//   font-weight: 600;
// `;

// const Details = styled(Typography)`
//   font-size: 14px;
//   word-break: break-word;
// `;

// const Singlepost = ({ post }) => {
//   const url =
//     post.picture ||
//     'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

//   const addEllipsis = (str, limit) => {
//     return str.length > limit ? str.substring(0, limit) + '...' : str;
//   };

//   const addLineBreaks = (text) => {
//     const lines = text.split(' ');
//     return lines.map((line, index) => (
//       <React.Fragment key={index}>
//         {line}
//         <br /> {/* Add a <br /> element to create a line break */}
//       </React.Fragment>
//     ));
//   };

//   return (
//     <Container>
//       <Image src={url} alt="post" />
//       <Text>{post.categories}</Text>
//       <Heading>{addEllipsis(post.title, 20)}</Heading>
//       <Text>Author: {post.username}</Text>
//       <Details>{addLineBreaks(post.description)}</Details>
//     </Container>
//   );
// };

// export default Singlepost;
