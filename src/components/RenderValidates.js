import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import cn from 'classnames';
import Validate from './Validate.js'

const actionCreators = {
    doValidate: actions.doValidate,
};

const mapStateToProps = (state) => {
    const { validates, } = state;
    return {
      validates,
    }
};


// const makeRawPath = (id, obj) => {
//     if( obj[id].parId !== 1 ) {
//         return `${id}/${makeRawPath(obj[id].parId, obj)}`;
//     }
//     else {
//         return id;
//     }
// }

// const makePath = (id, obj) => {
//     if(obj[id].parId === 1) {
//         return [1];
//     }
//     const rawPath = String(makeRawPath(id, obj));
//     const pieces = rawPath.split('/');
//     return pieces.filter((el, i) => i !== 0).map(el => + el).reverse();
// }


// const makeDeepNode = (path, tree, node, byId) => {
    
//     if (path[0] in tree) {
//         const newNode = tree[path[0]];
//         newNode.children.push({content: byId[path[0]]});
//         console.log(newNode)
//     }

//     return node;
// }

// const makeTree = ({ byId, allIds, tree = [] }) => {
//     let inner = [];
//     inner = tree;
    
//     const reversedList = allIds.reverse();

//     reversedList.forEach(el => {
//         if (el in inner) {
//             inner[el].children.push({
                
//             })
//         } else {
//             inner = {...inner, [el]: { content: byId[el], children: [] } }
//         }
//     });

//     // allIds.forEach(el => {
//     //     const data = {
//     //         [byId[el].parId]: {
//     //             content: byId[byId[el].parId],
//     //             children: [],
//     //         }
//     //     };
//     //     const path = makePath(el, byId);
//     //     if (path.length <= 1) {
//     //         if ( !(byId[el].parId in inner) ) {
//     //             inner = { ...inner, ...data};
//     //         } else {
//     //             inner[byId[el].parId].children.push(data)
//     //         }
//     //     } else {

//     //         makeDeepNode(path, inner, data, byId);
//     //     }
//     // });

//     // return inner;
// }

const RenderValidates = ({ validates }) => {
    const { tree } = validates;
    const { inner, children } = tree[0];
    


    return <Validate inner={inner} children={children}/>
}

export default connect(mapStateToProps, actionCreators)(RenderValidates);

