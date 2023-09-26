import { View, Text } from 'react-native'
import React from 'react'
import { styled } from '@gluestack-style/react'

const Container = styled(View,{ 
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
    variants:{
        variant:{
            bgWhite:{
                bg:'$primary0'
            },
            bgGreen:{
                bg:'#8bbe1b'
            },
        }

    }
})


export default Container