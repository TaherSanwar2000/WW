import { styled } from '@gluestack-style/react'
import { Text } from 'react-native'

const TextStyle = styled(Text,{
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
    variants:{
        variant:{
            white:{
                color:'$primary0',
                marginTop:'50%'
            },
            black:{
                color:'$primary1'
            }
        }
    }
})

export default TextStyle
