import React from "react";
import JapanMap from "../images/japan.jpeg";
import Fukuoka from "../images/fukuoka.jpeg";
import { Link } from "react-router-dom";
import Kyoto from "../images/kyoto.jpeg";
const Home = () => {
  return (
    <div className="page-content">
      <div className="page-desc">
        Describing Japan as a ‘backpack filled with surprises for every type of
        traveler’ would just be the right thing to do, thanks to the thousand
        shrines & temples, gorgeous gardens & palaces, the spectacular
        mountains, and other major attractions. It’s not only the technological
        wonders, but also the best places to visit in Japan that have
        highlighted the island nation on the map. And believe us, exploring each
        one of them is worth every dime.
        <div className="image-position">
          <img className="map-size" src={JapanMap} alt="map" />
        </div>
      </div>
      <div className="recommend">
        <h3>Recommended Articles</h3>
      </div>
      <div className="page-img">
        <div className="article-img">
          <a href="#tokyo">
            <img src={Kyoto} alt="tok" />
          </a>
          <p>Kyoto </p>
        </div>
        <div className="article-img">
          <a href="#fukuoka">
            <img src={Fukuoka} alt="" />
          </a>
          <p>Fukuoka </p>
        </div>{" "}
      </div>
      <div className="place" id="tokyo">
        <h2 className="place-name">Tokyo</h2>
        <div className="place-desc">
          Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous
          metropolis. It is also one of Japan's 47 prefectures, consisting of 23
          central city wards and multiple cities, towns and villages west of the
          city center. The Izu and Ogasawara Islands are also part of Tokyo.
          Prior to 1868, Tokyo was known as Edo. Previously a small castle town,
          Edo became Japan's political center in 1603 when Tokugawa Ieyasu
          established his feudal government there. A few decades later, Edo had
          grown into one of the world's largest cities. With the Meiji
          Restoration of 1868, the emperor and capital moved from Kyoto to Edo,
          which was renamed Tokyo ("Eastern Capital"). Large parts of Tokyo were
          destroyed in the Great Kanto Earthquake of 1923 and the air raids of
          1945. Today, Tokyo offers a seemingly unlimited choice of shopping,
          entertainment, culture and dining to its visitors. The city's history
          can be appreciated in districts such as Asakusa and in many excellent
          museums, historic temples and gardens. Contrary to common perception,
          Tokyo also offers a number of attractive green spaces in the city
          center and within relatively short train rides at its outskirts.
        </div>
      </div>
      <div className="place" id="hiroshima">
        <h2 className="place-name">Hiroshima</h2>
        <div className="place-desc">
          Hiroshima (広島) is the principal city of the Chugoku Region and home
          to over a million inhabitants. When the first atomic bomb was dropped
          over Hiroshima on August 6, 1945, the city became known worldwide for
          this unenviable distinction. The destructive power of the bomb was
          tremendous and obliterated nearly everything within a two kilometer
          radius. After the war, great efforts were taken to rebuild the city.
          Predictions that the city would be uninhabitable proved false.
          Destroyed monuments of Hiroshima's historical heritage, like Hiroshima
          Castle and Shukkeien Garden, were reconstructed. In the center of the
          city a large park was built and given a name that would reflect the
          aspirations of the re-born city: Peace Memorial Park.
        </div>
      </div>
      <div className="place" id="fukuoka">
        <h2 className="place-name">Fukuoka</h2>
        <div className="place-desc">
          Fukuoka (福岡) is Kyushu's largest and one of Japan's ten most
          populated cities. Because of its closeness to the Asian mainland
          (closer to Seoul than to Tokyo), Fukuoka has been an important harbor
          city for many centuries and was chosen by the Mongol invasion forces
          as their landing point in the 13th century. Today's Fukuoka is the
          product of the fusion of two cities in the year 1889, when the port
          city of Hakata and the former castle town of Fukuoka were merged into
          one city called Fukuoka. Hakata remains the name of one of Fukuoka's
          central districts and of the main railway station.
        </div>
      </div>
      <div className="linkto">
        <Link to="/about"> More... </Link>
      </div>
    </div>
  );
};

export default Home;
