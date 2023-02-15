import { AspectRatio, Image } from "native-base";

export default function C2_Box () {
    return <AspectRatio ratio={{
      base: 1 / 8,
      md: 9 / 10
    }} height={{
      base: 200,
      md: 400
    }}>
        <Image resizeMode="cover" source={
        require('../assets/prp.jpg')
      } alt="Picture of a Flower" />
      </AspectRatio>;
  };

  
