import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import '../Intro/Intro.css'
import { Link } from 'react-router-dom';

function Intro() {

  return (
    <>
      <IntroContainer>
        <ReactPlayer
          playing={true}
          loop={true}
          width={'100%'}
          height={'100%'}
          

          volume={0.8}
          url="https://www.youtube.com/watch?v=itnqEauWQZM"
          className="video__Intro"
        />
        <div className='infor__Intro'>
          <h1 className='heading__Intro'>React - Transformers</h1>
          <p className='overview_Intro'>Over many missions and against impossible odds, Dom Toretto (Vin Diesel) and his family have outsmarted, out-nerved and outdriven every foe in their path.
          </p>
          <Link to={`/detail/2`} className="btn btn-primary">

                       View Detail
          </Link>
        </div>

      </IntroContainer>
    </>



  )
}

export default Intro;

const IntroContainer = styled.div`
    background-color: var(--color-background);
    position: relative;
    color: var(--body_background);
    padding-top: 60%;


    .video__Intro{
        position: absolute;
        top: -48px;
        left: 0;
    }   

    .infor__Intro{
        position: absolute;
        top: 180px;
        left: 30px;

        @media screen and (max-width: 800px) {
            top: 120px;
            left: 25px;     
        }
        @media screen and( max-width:600px) {
            top: auto;
            left:auto;
            
        }
        .heading__Intro{
            font-size: 80px;
            transition: all 0.3s ease;
            color: white;
            @media screen and (max-width: 800px) {
            
            font-size: 40px;     
            }
            @media screen and( max-width:600px) {
            
            font-size:24px;
            
            }
        }
        .overview_Intro{
          font-size: 20px;
          color: white;
            max-width: 550px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
        }
      }
  .fadeBottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15,15,15,0.6) 40%,
      rgb(17,17,17),
      rgb(17,17,17)
    );
  }
`;