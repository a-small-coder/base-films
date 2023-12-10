'use client'

import Image from "next/image";
import * as Style from "./index.styled";
import img from '../../../../public/img.png'

const PreviewBox = () => {
    return (
        <>
        <Style.Structure>
            <Style.TextContent>
                <Style.Heding>
                    ShowHub
                </Style.Heding>
                <Style.Subtitle>
                    enjoy watching
                </Style.Subtitle>
                <Style.Desctiption>
                        Lorem ipsum dolor sit amet, consectetuer 
                        adipiscing elit, sed diam nonummy nibh euismod 
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                        Ut wisi enimad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt 
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim veniam, 
                        quis nostrud exerci
                </Style.Desctiption>
                <a href="/films">
                <Style.Button>
                    start now
                </Style.Button>
                </a>
                
            </Style.TextContent>

            <Style.ImageWrapp>
            <Image
                src={img}
                width={500}
                height={500}
                alt="Picture of the author"
                />
            </Style.ImageWrapp>
        </Style.Structure>
           
        </>
    )
}

export default PreviewBox;