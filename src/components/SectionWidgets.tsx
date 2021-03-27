import React from "react";
import { Card, RoundedCardWithImage } from "./Card";
import Button from "./Button";
import ArrowRightIcon from "./ArrowRightIcon";
import { Sponsor, Sponsors } from "../hooks/Sponsors";
import { SponsorLevelList } from "./SponsorList";

function SponsorList() {
  const sponsors: Sponsor[] = Sponsors();
  const diamondSponsors = sponsors.filter(a => a.sponsor_level === "Diamond");
  const goldSponsors = sponsors.filter(a => a.sponsor_level === "Gold");
  const silverSponsors = sponsors.filter(a => a.sponsor_level === "Silver");
  const bronzeSponsors = sponsors.filter(a => a.sponsor_level === "Bronze");

  return (
    <>
      <div className="pb-6">
        <SponsorLevelList title="Diamond Sponsors" sponsors={diamondSponsors} />
        <SponsorLevelList title="Gold Sponsors" sponsors={goldSponsors} />
        <SponsorLevelList title="Silver Sponsors" sponsors={silverSponsors} />
        <SponsorLevelList title="Bronze Sponsors" sponsors={bronzeSponsors} />
      </div>
    </>
  );
}

function DownloadNotice() {
  return (
    <>
      <Card>
        <h3 className="text-xl font-bold">Notice</h3>
        <p>
          The official Kodi version does not contain any content whatsoever. This
          means that you should provide your own content from a local or remote
          storage location, DVD, Blu-Ray or any other media carrier that you own.
          Additionally Kodi allows you to install third-party plugins that may
          provide access to content that is freely available on the official content
          provider website. The consumption of pirated content which would otherwise
          need to be paid for is not endorsed or approved by Team Kodi.
        </p>
      </Card>
    </>
  );
}

function SpreadTheWord() {
  return (
    <>
      <div className="flex">
        <div>
          <Button
            variant="primary"
            component="a"
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/KodiEntertainment"
            isLarge
          >
            Facebook
          </Button>
        </div>
        <div>
          <Button
            variant="primary"
            component="a"
            target="_blank"
            rel="noopener"
            href="https://twitter.com/koditv"
            isLarge
          >
            Twitter
          </Button>
        </div>
      </div>
    </>
  );
}

function CtaButtonInternal(props) {
  return (
    <>
      <Button variant="link" component="a" href={props.url} isLarge>
        {props.buttontext + " "}
        <ArrowRightIcon />
      </Button>
    </>
  );
}

function CtaButtonExternal(props) {
  return (
    <>
      <Button
        variant="link"
        component="a"
        target="_blank"
        rel="noopener"
        href={props.url}
        isLarge
      >
        {props.buttontext + " "}
        <ArrowRightIcon />
      </Button>
    </>
  );
}

function AboutOfficialRemotes() {
  return (
    <>
      <div className="flex justify-start">
        <div>
          <span>Kore™ (Android)</span>
          <img
            className="w-200 h-200"
            alt="Kore QR Code"
            src="/images/kore-qr.webp"
          />
        </div>
        <div>
          <span>Official Kodi Remote (iOS)</span>
          <img className="w-200 h-200" alt="iOS QR Code" src="/images/ios-qr.webp" />
        </div>
      </div>
    </>
  );
}

function AboutContactNote() {
  return (
    <>
      <Card>
        <h3 className="text-2xl font-bold">Note</h3>
        <p>
          This email address is only intended for corporate enquiries and not for
          support questions or other purposes.
        </p>
      </Card>
    </>
  );
}

function AboutDisclaimer() {
  return (
    <>
      <Card>
        <h3 className="text-2xl font-bold">Disclaimer</h3>
        <p>
          Kodi does not provide any media content or sources. Users must provide
          their own content or manually configure Kodi to access third party online
          services. The Kodi project does not provide any support for bootleg content
          or other illegally sourced material, nor do we allow community support
          within our official web sites and services for such content.
        </p>
      </Card>
    </>
  );
}

function AboutGallery() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <RoundedCardWithImage
          title="Movies"
          imgsrc="/images/about--movies.webp"
          imgalt=""
          imgtitle=""
        >
          Kodi is made for Movies! Supporting all the main video formats including
          streamable online media, Kodi can import, browse and play your Movie
          collection with ease.
        </RoundedCardWithImage>

        <RoundedCardWithImage
          title="TV Shows"
          imgsrc="/images/about--tvshows.webp"
          imgalt=""
          imgtitle=""
        >
          Kodi's TV Shows library supports episode and season views with posters or
          banners, watched tags, show descriptions and actors. Great for keeping
          track of your progress.
        </RoundedCardWithImage>

        <RoundedCardWithImage
          title="Music"
          imgsrc="/images/about--music.webp"
          imgalt=""
          imgtitle=""
        >
          Kodi can play all your music including mp3, flac, wav and wma formats. It
          has cue sheets, tag reading support and smart playlists for ultimate
          control of your music collection.
        </RoundedCardWithImage>

        <RoundedCardWithImage
          title="Photos"
          imgsrc="/images/about--photos.webp"
          imgalt=""
          imgtitle=""
        >
          Kodi is the photographers friend. Import pictures into a library and browse
          the different views, start a slideshow, sort or filter them all using your
          remote control.
        </RoundedCardWithImage>

        <RoundedCardWithImage
          title="PVR"
          imgsrc="/images/about--pvr.webp"
          imgalt=""
          imgtitle=""
        >
          Kodi allows you to watch and record live TV all through an easy to use
          interface. It works with a number of popular backends including
          MediaPortal, MythTV, NextPVR, Tvheadend and many more.
        </RoundedCardWithImage>

        <RoundedCardWithImage
          title="Games"
          imgsrc="/images/about--games.webp"
          imgalt=""
          imgtitle=""
        >
          Kodi isn't just for passive entertainment media. You can also play games on
          Kodi. Pick from a large number of emulators, or even play a stand-alone
          game. There's even extensive support for game controllers.
        </RoundedCardWithImage>

        <RoundedCardWithImage
          title="Skins"
          imgsrc="/images/about--skins.webp"
          imgalt=""
          imgtitle=""
        >
          Kodi allows you to completely change the whole appearance of the interface
          using a variety of skins. We have no doubt that you will find something
          that suits your tastes (or living room).
        </RoundedCardWithImage>

        <RoundedCardWithImage
          title="Add-ons"
          imgsrc="/images/about--addons.webp"
          imgalt=""
          imgtitle=""
        >
          The real power of Kodi comes from the vast selection of community created
          Add-ons. There are Add-Ons for popular web services, applications and
          scripts. <a href="/addons">See which ones are currently available</a>.
        </RoundedCardWithImage>

        <RoundedCardWithImage
          title="Web Interface"
          imgsrc="/images/about--webinterface.webp"
          imgalt=""
          imgtitle=""
        >
          Interact with Kodi using its JSON-RPC based remote interface. This brings
          loads of possibilities for remote controls,{" "}
          <a href="/addons/category/web-interfaces">web browsers</a>, and 3rd party
          tools to take Kodi to the next level.
        </RoundedCardWithImage>

        <RoundedCardWithImage
          title="Remote Controls"
          imgsrc="/images/about--remotes.webp"
          imgalt=""
          imgtitle=""
        >
          With support for{" "}
          <a href="http://kodi.wiki/view/Remote_controls">
            hundreds of remote controls
          </a>
          , CEC-compatible TVs, or one of the{" "}
          <a href="/about/software">new Smartphone and Tablet Apps</a>, Kodi allows
          you to control your media your way.
        </RoundedCardWithImage>
      </div>
    </>
  );
}

export {
  AboutDisclaimer,
  AboutGallery,
  AboutContactNote,
  AboutOfficialRemotes,
  CtaButtonExternal,
  CtaButtonInternal,
  DownloadNotice,
  SponsorList,
  SpreadTheWord,
};
