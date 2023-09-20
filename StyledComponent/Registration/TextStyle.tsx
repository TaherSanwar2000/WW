import { Text } from 'react-native'
import { styled } from '@gluestack-style/react'

const TextStyle = styled(Text,{
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
    variants:{
        variant:{
            white:{
                color:'$primary0'
            },
            black:{
                color:'$primary1'
            }
        }
    }
})

export default TextStyle