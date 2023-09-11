import { StyleSheet, View } from 'react-native';
import { Textarea } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"
import ButtonSample from "./ButtonSample";
import { Grid } from '@chakra-ui/react';
import React, { useState } from "react";

export default function Events(props) {
    return (
        /*
        <View style={styles.container}>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
        <ButtonSample></ButtonSample>
            </Grid>
        </View>

         */

        <div style={{width: 1920, height: 1080, position: 'relative', background: 'white'}}>
            <div style={{width: 1920, height: 1080, left: 0, top: 0, position: 'absolute'}}>
                <div style={{width: 1920, height: 1080, left: 0, top: 0, position: 'absolute'}}>
                    <div style={{width: 1920, height: 1080, left: 0, top: 0, position: 'absolute', background: '#1E1B39'}} />
                    <div style={{width: 1920, height: 1080, left: 0, top: 0, position: 'absolute'}}>
                        <div style={{width: 1920, height: 1080, left: 0, top: 0, position: 'absolute', background: '#1E1B39'}} />
                        <div style={{width: 957, height: 957, left: 1556.23, top: -498.22, position: 'absolute', opacity: 0.06, background: '#1E1B39', borderRadius: 9999, border: '125.37px #E1DEFF solid'}} />
                        <div style={{width: 957, height: 957, left: -451, top: 572.50, position: 'absolute', opacity: 0.06, background: '#1E1B39', borderRadius: 9999, border: '125.37px #E1DEFF solid'}} />
                    </div>
                </div>
                <div style={{width: 1920, height: 797, left: 0, top: 283, position: 'absolute'}}>
                    <div style={{width: 1920, height: 106, left: 0, top: 691, position: 'absolute'}}>
                        <div style={{width: 1920, height: 106, left: 0, top: 0, position: 'absolute', background: 'white'}} />
                        <div style={{left: 1784, top: 34, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: 10, display: 'inline-flex'}} />
                        <div style={{left: 106, top: 29, position: 'absolute', background: 'white', justifyContent: 'flex-start', alignItems: 'center', gap: 14, display: 'inline-flex'}}>
                            <div style={{width: 48, height: 48, position: 'relative'}}>
                                <div style={{width: 21.56, height: 21.52, left: 13.22, top: 13.24, position: 'absolute'}}>
                                    <div style={{width: 6.06, height: 6.05, left: 15.50, top: -0, position: 'absolute', opacity: 0.50, background: 'white'}}></div>
                                    <div style={{width: 6.06, height: 6.33, left: 15.50, top: 7.60, position: 'absolute', opacity: 0.70, background: 'white'}}></div>
                                    <div style={{width: 6.06, height: 6.05, left: 15.50, top: 15.47, position: 'absolute', background: 'white'}}></div>
                                    <div style={{width: 6.34, height: 6.33, left: 7.61, top: 7.60, position: 'absolute', opacity: 0.60, background: 'white'}}></div>
                                    <div style={{width: 6.34, height: 6.05, left: 7.61, top: 15.47, position: 'absolute', opacity: 0.90, background: 'white'}}></div>
                                    <div style={{width: 6.06, height: 6.05, left: 0, top: 15.47, position: 'absolute', opacity: 0.80, background: 'white'}}></div>
                                </div>
                            </div>
                            <div style={{width: 31.65, height: 0, border: '1px #B0B0C1 solid'}}></div>
                            <div style={{color: '#4A3AFF', fontSize: 28, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 38, wordWrap: 'break-word'}}>cultural exchange</div>
                        </div>
                        <div style={{width: 1708, height: 0, left: 106, top: 1.13, position: 'absolute', border: '0.50px #DEDEE9 solid'}}></div>
                    </div>
                    <div style={{width: 771, height: 95, left: 603, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 88, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 95, wordWrap: 'break-word'}}>Cultural Exchange</div>
                    </div>
                    <div style={{width: 1708, height: 399.54, left: 106, top: 136.13, position: 'absolute'}}>
                        <div style={{width: 529.19, height: 176.04, left: 0, top: 0, position: 'absolute'}}>
                            <div style={{width: 529.19, height: 176.04, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 12px rgba(13, 10, 44, 0.06)', borderRadius: 32, border: '0.50px #DEDEE9 solid'}} />
                            <div style={{width: 80, height: 80, left: 37.78, top: 48.02, position: 'absolute'}}>
                                <div style={{width: 80, height: 80, left: 0, top: 0, position: 'absolute', background: '#4A3AFF', borderRadius: 9999}} />
                                <div style={{width: 28.21, height: 40.31, left: 25.89, top: 19.85, position: 'absolute'}}>
                                    <div style={{width: 28.21, height: 40.31, left: 0, top: 0, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 0.02, height: 0, left: 14.11, top: 32.24, position: 'absolute', border: '2px white solid'}}></div>
                                </div>
                            </div>
                            <div style={{left: 138.54, top: 61.02, position: 'absolute', color: '#1E1B39', fontSize: 42, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 54, wordWrap: 'break-word'}}>UI/UX Design</div>
                        </div>
                        <div style={{width: 529.19, height: 176.04, left: 0, top: 223.50, position: 'absolute'}}>
                            <div style={{width: 529.19, height: 176.04, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 12px rgba(13, 10, 44, 0.06)', borderRadius: 32, border: '0.50px #DEDEE9 solid'}} />
                            <div style={{width: 80, height: 80, left: 37.78, top: 48.02, position: 'absolute'}}>
                                <div style={{width: 80, height: 80, left: 0, top: 0, position: 'absolute', background: '#4A3AFF', borderRadius: 9999}} />
                                <div style={{width: 36.34, height: 36.34, left: 21.83, top: 21.83, position: 'absolute'}}>
                                    <div style={{width: 18.17, height: 18.17, left: 18.17, top: 18.17, position: 'absolute', border: '1.75px white solid'}}></div>
                                    <div style={{width: 29.08, height: 29.08, left: 0, top: 0, position: 'absolute', border: '1.75px white solid'}}></div>
                                    <div style={{width: 13.79, height: 13.79, left: 0, top: 0, position: 'absolute', border: '1.75px white solid'}}></div>
                                </div>
                            </div>
                            <div style={{left: 138.54, top: 61.02, position: 'absolute', color: '#1E1B39', fontSize: 42, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 54, wordWrap: 'break-word'}}>Graphic Design</div>
                        </div>
                        <div style={{width: 529.19, height: 176.04, left: 589.41, top: 0, position: 'absolute'}}>
                            <div style={{width: 529.19, height: 176.04, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 12px rgba(13, 10, 44, 0.06)', borderRadius: 32, border: '0.50px #DEDEE9 solid'}} />
                            <div style={{width: 80, height: 80, left: 37.78, top: 48.02, position: 'absolute'}}>
                                <div style={{width: 80, height: 80, left: 0, top: 0, position: 'absolute', background: '#4A3AFF', borderRadius: 9999}} />
                                <div style={{width: 29.79, height: 41.02, left: 25.10, top: 19.49, position: 'absolute'}}>
                                    <div style={{width: 7.45, height: 0, left: 11.17, top: 41.02, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 29.79, height: 33.57, left: 0, top: 0, position: 'absolute', border: '2px white solid'}}></div>
                                </div>
                            </div>
                            <div style={{left: 138.54, top: 61.02, position: 'absolute', color: '#1E1B39', fontSize: 42, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 54, wordWrap: 'break-word'}}>Product Design</div>
                        </div>
                        <div style={{width: 529.19, height: 176.04, left: 589.41, top: 223.50, position: 'absolute'}}>
                            <div style={{width: 529.19, height: 176.04, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 12px rgba(13, 10, 44, 0.06)', borderRadius: 32, border: '0.50px #DEDEE9 solid'}} />
                            <div style={{width: 80, height: 80, left: 37.78, top: 48.02, position: 'absolute'}}>
                                <div style={{width: 80, height: 80, left: 0, top: 0, position: 'absolute', background: '#4A3AFF', borderRadius: 9999}} />
                                <div style={{width: 80, height: 80, left: 0, top: 0, position: 'absolute', background: '#4A3AFF', borderRadius: 9999}} />
                                <div style={{width: 80, height: 80, left: 0, top: 0, position: 'absolute', background: '#4A3AFF', borderRadius: 9999}} />
                                <div style={{width: 40.32, height: 42.56, left: 19.84, top: 18.72, position: 'absolute'}}>
                                    <div style={{width: 40.32, height: 42.56, left: 0, top: 0, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 38.72, height: 9.89, left: 0.79, top: 10.10, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 0, height: 22.56, left: 20.16, top: 19.99, position: 'absolute', border: '2px white solid'}}></div>
                                </div>
                            </div>
                            <div style={{left: 138.54, top: 61.02, position: 'absolute', color: '#1E1B39', fontSize: 42, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 54, wordWrap: 'break-word'}}>Brand Design</div>
                        </div>
                        <div style={{width: 529.19, height: 176.04, left: 1178.81, top: 0, position: 'absolute'}}>
                            <div style={{width: 529.19, height: 176.04, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 12px rgba(13, 10, 44, 0.06)', borderRadius: 32, border: '0.50px #DEDEE9 solid'}} />
                            <div style={{width: 80, height: 80, left: 37.78, top: 48.02, position: 'absolute'}}>
                                <div style={{width: 80, height: 80, left: 0, top: 0, position: 'absolute', background: '#4A3AFF', borderRadius: 9999}} />
                                <div style={{width: 42.53, height: 28.33, left: 18.73, top: 25.83, position: 'absolute'}}>
                                    <div style={{width: 42.53, height: 7.08, left: -0, top: 21.25, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 31.88, height: 21.25, left: 5.33, top: 0, position: 'absolute', border: '2px white solid'}}></div>
                                </div>
                            </div>
                            <div style={{left: 138.54, top: 61.02, position: 'absolute', color: '#1E1B39', fontSize: 42, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 54, wordWrap: 'break-word'}}>Web Design</div>
                        </div>
                        <div style={{width: 529.19, height: 176.04, left: 1178.81, top: 223.50, position: 'absolute'}}>
                            <div style={{width: 529.19, height: 176.04, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 12px rgba(13, 10, 44, 0.06)', borderRadius: 32, border: '0.50px #DEDEE9 solid'}} />
                            <div style={{width: 80, height: 80, left: 37.78, top: 48.02, position: 'absolute'}}>
                                <div style={{width: 80, height: 80, left: 0, top: 0, position: 'absolute', background: '#4A3AFF', borderRadius: 9999}} />
                                <div style={{width: 39.81, height: 39.81, left: 20.09, top: 20.09, position: 'absolute'}}>
                                    <div style={{width: 15.03, height: 15.03, left: 7.15, top: 7.16, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 8.38, height: 8.38, left: 20.95, top: 0, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 8.38, height: 8.38, left: 0, top: 20.96, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 12.57, height: 12.57, left: 18.86, top: 18.86, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 8.38, height: 8.38, left: 31.43, top: 14.67, position: 'absolute', border: '2px white solid'}}></div>
                                    <div style={{width: 8.38, height: 8.38, left: 14.67, top: 31.43, position: 'absolute', border: '2px white solid'}}></div>
                                </div>
                            </div>
                            <div style={{left: 138.54, top: 61.02, position: 'absolute', color: '#1E1B39', fontSize: 42, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 54, wordWrap: 'break-word'}}>Motion Graphics</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: 44, height: 49, left: 110, top: 1002, position: 'absolute'}}>
                <div style={{width: 44.01, height: 49, left: -0, top: -0, position: 'absolute'}}>
                    <div style={{width: 12.42, height: 19.18, left: 3.70, top: 7.51, position: 'absolute', background: '#7F7F7F'}}></div>
                    <div style={{width: 12.52, height: 18.81, left: 3.68, top: 22.43, position: 'absolute', background: '#238315'}}></div>
                    <div style={{width: 20.87, height: 4.90, left: 12.16, top: 36.55, position: 'absolute', background: '#C22E28'}}></div>
                    <div style={{width: 12.49, height: 18.84, left: 28.96, top: 22.59, position: 'absolute', background: '#E99E00'}}></div>
                    <div style={{width: 21.11, height: 5.03, left: 12.04, top: 7.52, position: 'absolute', background: '#2383B5'}}></div>
                    <div style={{width: 12.37, height: 18.93, left: 29.10, top: 7.78, position: 'absolute', background: '#8CAAEA'}}></div>
                    <div style={{width: 5.44, height: 5.52, left: 19.78, top: -0, position: 'absolute', background: '#2383B5'}}></div>
                    <div style={{width: 5.45, height: 5.53, left: 38.56, top: 11.22, position: 'absolute', background: '#8CAAEA'}}></div>
                    <div style={{width: 5.44, height: 5.50, left: 37.58, top: 32.70, position: 'absolute', background: '#E99E00'}}></div>
                    <div style={{width: 5.44, height: 5.52, left: 20.48, top: 43.48, position: 'absolute', background: '#C22E28'}}></div>
                    <div style={{width: 5.44, height: 5.53, left: -0, top: 32.17, position: 'absolute', background: '#238315'}}></div>
                    <div style={{width: 5.44, height: 5.52, left: 1.58, top: 10.97, position: 'absolute', background: '#7F7F7F'}}></div>
                </div>
            </div>
            <div style={{width: 140, height: 154, left: 919, top: 100, position: 'absolute'}}>
                <div style={{width: 140.03, height: 154, left: -0, top: -0, position: 'absolute'}}>
                    <div style={{width: 39.52, height: 60.29, left: 11.76, top: 23.60, position: 'absolute', background: '#7F7F7F'}}></div>
                    <div style={{width: 39.85, height: 59.12, left: 11.70, top: 70.50, position: 'absolute', background: '#238315'}}></div>
                    <div style={{width: 66.41, height: 15.40, left: 38.69, top: 114.88, position: 'absolute', background: '#C22E28'}}></div>
                    <div style={{width: 39.76, height: 59.21, left: 92.16, top: 71.01, position: 'absolute', background: '#E99E00'}}></div>
                    <div style={{width: 67.17, height: 15.79, left: 38.32, top: 23.63, position: 'absolute', background: '#2383B5'}}></div>
                    <div style={{width: 39.34, height: 59.49, left: 92.59, top: 24.44, position: 'absolute', background: '#8CAAEA'}}></div>
                    <div style={{width: 17.31, height: 17.35, left: 62.93, top: -0, position: 'absolute', background: '#2383B5'}}></div>
                    <div style={{width: 17.33, height: 17.38, left: 122.70, top: 35.27, position: 'absolute', background: '#8CAAEA'}}></div>
                    <div style={{width: 17.29, height: 17.30, left: 119.58, top: 102.76, position: 'absolute', background: '#E99E00'}}></div>
                    <div style={{width: 17.30, height: 17.34, left: 65.16, top: 136.66, position: 'absolute', background: '#C22E28'}}></div>
                    <div style={{width: 17.31, height: 17.38, left: -0, top: 101.09, position: 'absolute', background: '#238315'}}></div>
                    <div style={{width: 17.31, height: 17.34, left: 5.03, top: 34.48, position: 'absolute', background: '#7F7F7F'}}></div>
                </div>
            </div>
        </div>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});