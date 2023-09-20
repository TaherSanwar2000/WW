import { View, Text } from 'react-native'
import React from 'react'
import { styled } from '@gluestack-style/react'

const Container = styled(View,{ 
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    variants:{
        variant:{
            solid:{
                bg:'$primary0'
            },
            subtle:{
                bg:'#8bbe1b'
            }
        }

    }
})


export default Container