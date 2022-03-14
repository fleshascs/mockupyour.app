import DownloadRow from '../components/DownloadRow';
import { RowThumbnail } from '../components/RowThumbnail';
import { ratingSchema } from '../components/utils';
import Example from '../components/Example/Example';
export default function Page() {
  return (
    <>
      <DownloadRow lazy={false} />

      <RowThumbnail
        alt='original cs 1.6 game'
        src={require('../images/game/header.jpg?resize&size=485')}
        webp={require('../images/game/header.jpg?resize&size=485&format=webp')}
      />
      <Example />
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'Download CS 1.6 | Free Counter-Strike 1.6 Full Version',
    description:
      'Discovered in 2003 as Counter-Strike 1.6 became one of the best known games ever made. Our  free CS 1.6 install ensures best gaming experience. This setup includes High FPS config and newest build version. The main game idea brings us to two agains each other fighting teams (Counter-Terrorists and Terrorists), both teams has their own unique weapons, it includes rifles, knifes and grenades.'
  },
  schema: ratingSchema({ ratingValue: '4.7', ratingCount: '16864' })
};
