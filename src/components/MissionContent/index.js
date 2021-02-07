import React from 'react';
import { ContentWrapper, Content, Quote, Heading, Divider } from './styles';
import { StyledLink } from '../StyledLink';

export const MissionContent = () => {
  return (
    <ContentWrapper>
      <Heading>Making on Mission</Heading>
      <Divider />
      <Content>
        It can be really hard to be a woman and feel beautiful in this world
        today. We are constantly inundated and overwhelmed by advertisement, tv
        shows, and unrealistic expectations. When you go into a retail store the
        size you need is never available, but the size smaller is. I know, for
        me, the process of seeing myself as beautiful has been a long one. One,
        that honestly, without the grace of God I would’ve never even started
        down.
      </Content>
      <Quote>
        <span>
          {`"`}I know, for me, the process of seeing myself as beautiful has
          been a long one.{`"`}
        </span>
      </Quote>
      <Content>
        A few years ago, I was planted strongly in the rat race chasing worldly
        beauty. I was chasing a standard that I was never going to be able to
        live up to. Through the slow and gentle pursuit of God I began to
        realize that I had to redefine beauty. I had to accept that God cares
        about me and He wants me to know that I’m beautiful. {`(`}That’s true
        for you too. He cares about you and wants you to know you’re beautiful
        {`)`}.
      </Content>
      <Quote>
        <span>
          {`"`}Through the slow and gentle pursuit of God I began to realize
          that I had to redefine beauty.{`"`}
        </span>
      </Quote>
      <Content>
        I definitely wouldn’t pretend to have arrived at the end of this
        journey. Like most women I often struggle with the way I look or feel.
        But because of what the Lord has done for me, I knew when I started
        making it had to be for a reason. I wanted to make simple, elegant
        pieces that were filled with love. I wanted to help create a culture
        that consistently reminded the women around me just how beautiful they
        are. I wanted to take steps forward in raising my daughters to believe
        they are beautiful, because God has called them beautiful.
      </Content>
      <Heading>The Practicals</Heading>
      <Divider />
      <Content>
        Making for mission is more than just the heart and spirit. I wanted
        there to be actual actions attached to that. So when I started making I
        set out to connect with local non profit organizations who rescue and
        restore women so that I could be a part of helping these women realize
        they are beautiful.
      </Content>
      <br />
      <Content>
        The other thing I am doing, is actively trying to connect with women who
        have incredible stories of love and power. Then make a piece that in
        some small way reflects and expresses that story.
      </Content>
      <br />
      <Content>
        Thank you so much for being here. Thank you for reading. Thank you for
        considering buying some of my work. It literally means the world to me.
        I hope that when you walk away you’ll realize that you, girl, are
        beautiful.
      </Content>
      <Heading>Do you have a story to tell or a mission opportunity?</Heading>
      <StyledLink to="/faq">Connect With Me</StyledLink>
    </ContentWrapper>
  );
};
