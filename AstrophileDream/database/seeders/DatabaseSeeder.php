<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Astronaut;
use App\Models\Planet;
use App\Models\Rocket;
use App\Models\Star;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $user = [
            [
                "name" => "Nur Rachmat, M. Kom",
                "email" => "nurrachmat@mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "081917281921",
                "role" => "admin",
                "image" => "foto_user1.jpg",
                "password" => bcrypt("Nurrachmat123"),
            ],
            [
                "name" => "Candra",
                "email" => "candra@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "08123456789",
                "role" => "admin",
                "image" => "foto_user2.jpg",
                "password" => bcrypt("Candra123"),
            ],
            [
                "name" => "Kelvin William Chandra",
                "email" => "kelvin.william@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "082178528769",
                "role" => "admin",
                "image" => "foto_user3.png",
                "password" => bcrypt("Kelvin123"),

            ],
            [
                "name" => "Albertus Dwi Andhika Putra",
                "email" => "albertusdwi@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "082178528788",
                "role" => "user",
                "image" => "foto_user4.png",
                "password" => bcrypt("Andhika123"),
            ],
            [
                "name" => "Randie Sasongko",
                "email" => "randiesasongko@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "089273628382",
                "role" => "user",
                "image" => "foto_user5.png",
                "password" => bcrypt("Randie123"),
            ],
            [
                "name" => "Nicholas",
                "email" => "nicholas@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "081928172829",
                "role" => "user",
                "image" => "foto_user6.png",
                "password" => bcrypt("Nicholas123"),
            ],
            [
                "name" => "Selvie",
                "email" => "selvie@mhs.mdp.ac.id",
                "gender" => "Female",
                "phoneNumber" => "08192792918",
                "role" => "user",
                "image" => "foto_user_p1.png",
                "password" => bcrypt("Selvie123"),
            ],
            [
                "name" => "Mulia Saphira",
                "email" => "muliasaphira@mhs.mdp.ac.id",
                "gender" => "Female",
                "phoneNumber" => "08192728162",
                "role" => "user",
                "image" => "foto_user_p2.png",
                "password" => bcrypt("Mulia123"),
            ],
            [
                "name" => "Rafael Lois Widyakusuma",
                "email" => "rafaellois@mhs.mdp.ac.id",
                "gender" => "Female",
                "phoneNumber" => "08917281928",
                "role" => "user",
                "image" => "foto_user_p3.png",
                "password" => bcrypt("Rafael123"),
            ],
            [
                "name" => "Michelle Graciela",
                "email" => "michelle@mhs.mdp.ac.id",
                "gender" => "Female",
                "phoneNumber" => "08299272829",
                "role" => "user",
                "image" => "foto_user_p4.png",
                "password" => bcrypt("Michelle123"),
            ],
            [
                "name" => "Silvi Mutia",
                "email" => "silvimutia@mhs.mdp.ac.id",
                "gender" => "Female",
                "phoneNumber" => "08917281928",
                "role" => "user",
                "image" => "foto_user_p5.png",
                "password" => bcrypt("Silvi123"),
            ],
            [
                "name" => "Jendraja Husin Kotan",
                "email" => "jendrajahusinkotan@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "0891282718",
                "role" => "user",
                "image" => "foto_user7.png",
                "password" => bcrypt("Jendraja123"),
            ],

            [
                "name" => "Billy Franko",
                "email" => "billy@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "081916271819",
                "role" => "user",
                "image" => "foto_user8.png",
                "password" => bcrypt("Billy123"),
            ],
            [
                "name" => "Vincent",
                "email" => "vincent@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "08917282191",
                "role" => "user",
                "image" => "foto_user9.png",
                "password" => bcrypt("Vincent123"),
            ],
            [
                "name" => "Januar Firnando",
                "email" => "januar@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "082963362829",
                "role" => "user",
                "image" => "foto_user9.png",
                "password" => bcrypt("Januar123"),
            ],
            [
                "name" => "Surya Pratama Tanzil",
                "email" => "surya@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "082973282818",
                "role" => "user",
                "image" => "foto_user10.png",
                "password" => bcrypt("Surya123"),
            ],
            [
                "name" => "Muhammad Anugerah Hakiki",
                "email" => "haki@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "082928271819",
                "role" => "user",
                "image" => "foto_user11.png",
                "password" => bcrypt("Haki123"),
            ],
            [
                "name" => "Rikky",
                "email" => "rikky@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "08912818192",
                "role" => "user",
                "image" => "foto_user12.png",
                "password" => bcrypt("Rikky123"),
            ],
            [
                "name" => "Viky Hendriko",
                "email" => "viky@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "08128218191",
                "role" => "user",
                "image" => "foto_user13.png",
                "password" => bcrypt("Viky123"),
            ],
            [
                "name" => "Ade Rocky Saputra",
                "email" => "ade@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "0821917181",
                "role" => "user",
                "image" => "foto_user14.png",
                "password" => bcrypt("Ade123"),
            ],
            [
                "name" => "Muhammad Ishaq Maulana",
                "email" => "ishaq@mhs.mdp.ac.id",
                "gender" => "Male",
                "phoneNumber" => "0821917181",
                "role" => "user",
                "image" => "foto_user15.png",
                "password" => bcrypt("Ishaq123"),
            ]
        ];
            if(DB::table('users')->count() == 0){
                User::insert($user);
            };
            $astronaut = [
            [
                "firstName" => "Neil",
                "lastName" => "Armstrong",
                "position" => "Apollo",
                "rank" => "Commander",
                "timeInSpace" => "8 days 14 hours 12 minutes and 30 seconds",
                "numberOfMissions" => "2",
                "missions" => "Gemini 8 And Apollo 11",
                "education" => "Purdue University (BS)\r\nUniversity of Southern California (MS)",
                "yearsActive" => "9",
                "status" => "inactive",
                "astronautImage" => "Neil_Armstrong.jpg",
                "astronautDescription" => "Neil Alden Armstrong (August 5, 1930 – August 25, 2012) was an American astronaut and aeronautical engineer who became the first person to walk on the Moon in 1969. He was also a naval aviator, test pilot, and university professor.\r\n\r\nArmstrong was born and raised in Wapakoneta, Ohio. He entered Purdue University, studying aeronautical engineering, with the U.S. Navy paying his tuition under the Holloway Plan. He became a midshipman in 1949 and a naval aviator the following year. He saw action in the Korean War, flying the Grumman F9F Panther from the aircraft carrier USS Essex. After the war, he completed his bachelor\'s degree at Purdue and became a test pilot at the National Advisory Committee for Aeronautics (NACA) High-Speed Flight Station at Edwards Air Force Base in California. He was the project pilot on Century Series fighters and flew the North American X-15 seven times. He was also a participant in the U.S. Air Force\'s Man in Space Soonest and X-20 Dyna-Soar human spaceflight programs.\r\n\r\nArmstrong joined the NASA Astronaut Corps in the second group, which was selected in 1962. He made his first spaceflight as command pilot of Gemini 8 in March 1966, becoming NASA\'s first civilian astronaut to fly in space. During this mission with pilot David Scott, he performed the first docking of two spacecraft; the mission was aborted after Armstrong used some of his re-entry control fuel to stabilize a dangerous roll caused by a stuck thruster. During training for Armstrong\'s second and last spaceflight as commander of Apollo 11, he had to eject from the Lunar Landing Research Vehicle moments before a crash.\r\n\r\nOn July 20, 1969, Armstrong and Apollo 11 Lunar Module (LM) pilot Buzz Aldrin became the first people to land on the Moon, and the next day they spent two and a half hours outside the Lunar Module Eagle spacecraft while Michael Collins remained in lunar orbit in the Apollo Command Module Columbia. When Armstrong first stepped onto the lunar surface, he famously said: \"That\'s one small step for [a] man, one giant leap for mankind.\" It was broadcast live to an estimated 530 million viewers worldwide. Apollo 11 was a major US victory in the Space Race, by fulfilling a national goal proposed in 1961 by President John F. Kennedy \"of landing a man on the Moon and returning him safely to the Earth\" before the end of the decade. Along with Collins and Aldrin, Armstrong was awarded the Presidential Medal of Freedom by President Richard Nixon and received the 1969 Collier Trophy. President Jimmy Carter presented him with the Congressional Space Medal of Honor in 1978, he was inducted into the National Aviation Hall of Fame in 1979, and with his former crewmates received the Congressional Gold Medal in 2009.\r\n\r\nAfter he resigned from NASA in 1971, Armstrong taught in the Department of Aerospace Engineering at the University of Cincinnati until 1979. He served on the Apollo 13 accident investigation and on the Rogers Commission, which investigated the Space Shuttle Challenger disaster. In 2012, Armstrong died due to complications resulting from coronary bypass surgery, at the age of 82",
            ],
            [
                "firstName" => "Michael",
                "lastName" => "Collins",
                "position" => "Apollo",
                "rank" => "Command Module Pilot",
                "timeInSpace" => "11 days, 2 hours, 4 minutes, 43 seconds",
                "numberOfMissions" => "2",
                "missions" => "Gemini 10 And Apollo 11",
                "education" => "United States Military Academy (BS)",
                "yearsActive" => "10",
                "status" => "inactive",
                "astronautImage" => "Michael_Collins.jpg",
                "astronautDescription" => "Michael Collins (October 31, 1930 – April 28, 2021) was an American astronaut who flew the Apollo 11 command module Columbia around the Moon in 1969 while his crewmates, Neil Armstrong and Buzz Aldrin, made the first crewed landing on the surface. He was also a test pilot and major general in the U.S. Air Force Reserve.\r\n\r\nBorn in Rome, Italy, where his father was stationed at the time, Collins graduated in the Class of 1952 from the United States Military Academy. He followed his father, brother, uncle, and cousin into the military. He joined the United States Air Force, and flew F-86 Sabre fighters at Chambley-Bussières Air Base, France. He was accepted into the U.S. Air Force Experimental Flight Test Pilot School at Edwards Air Force Base in 1960, also graduating from the Aerospace Research Pilot School (Class III).\r\n\r\nSelected as part of NASA\'s third group of 14 astronauts in 1963, Collins flew in space twice. His first spaceflight was on Gemini 10 in 1966, in which he and Command Pilot John Young performed orbital rendezvous with two spacecraft and undertook two extravehicular activities (EVAs, also known as spacewalks). On the 1969 Apollo 11 mission, he became one of 24 people to fly to the Moon, which he orbited thirty times. He was the fourth person (and third American) to perform a spacewalk, the first person to have performed more than one spacewalk, and, after Young, who flew the command module on Apollo 10, the second person to orbit the Moon alone.\r\n\r\nAfter retiring from NASA in 1970, Collins took a job in the Department of State as Assistant Secretary of State for Public Affairs. A year later, he became the director of the National Air and Space Museum, and held this position until 1978, when he stepped down to become undersecretary of the Smithsonian Institution. In 1980, he took a job as vice president of LTV Aerospace. He resigned in 1985 to start his own consulting firm. Along with his Apollo 11 crewmates, Collins was awarded the Presidential Medal of Freedom in 1969 and the Congressional Gold Medal in 2011.",
            ],
            [
                "firstName" => "Buzz",
                "lastName" => "Aldrin",
                "position" => "Apollo",
                "rank" => "Lunar Module Pilot",
                "timeInSpace" => "12 days 1 hour and 53 minutes",
                "numberOfMissions" => "2",
                "missions" => "Gemini 12 and Apollo 11",
                "education" => "United States Military Academy (BS)\r\nMassachusetts Institute of Technology (ScD)",
                "yearsActive" => "8",
                "status" => "inactive",
                "astronautImage" => "Buzz_Aldrin.jpg",
                "astronautDescription" => "Buzz Aldrin (born Edwin Eugene Aldrin Jr.; January 20, 1930) is an American former astronaut, engineer and fighter pilot. He made three spacewalks as pilot of the 1966 Gemini 12 mission. As the Lunar Module Eagle pilot on the 1969 Apollo 11 mission, he and mission commander Neil Armstrong were the first two people to land on the Moon.\r\n\r\nBorn in Glen Ridge, New Jersey, Aldrin graduated third in the class of 1951 from the United States Military Academy at West Point with a degree in mechanical engineering. He was commissioned into the United States Air Force and served as a jet fighter pilot during the Korean War. He flew 66 combat missions and shot down two MiG-15 aircraft.\r\n\r\nAfter earning a Doctor of Science degree in astronautics from the Massachusetts Institute of Technology, Aldrin was selected as a member of NASA\'s Astronaut Group 3, making him the first astronaut with a doctoral degree. His doctoral thesis, Line-of-Sight Guidance Techniques for Manned Orbital Rendezvous, earned him the nickname \"Dr. Rendezvous\" from fellow astronauts. His first space flight was in 1966 on Gemini 12, during which he spent over five hours on extravehicular activity. Three years later, Aldrin set foot on the Moon at 03:15:16 on July 21, 1969 (UTC), nineteen minutes after Armstrong first touched the surface, while command module pilot Michael Collins remained in lunar orbit. A Presbyterian elder, Aldrin became the first person to hold a religious ceremony on the Moon when he privately took communion. Apollo 11 effectively proved U.S. victory in the Space Race by fulfilling a national goal proposed in 1961 by President John F. Kennedy \"of landing a man on the Moon and returning him safely to the Earth\" before the end of the decade.\r\n\r\nAfter leaving NASA in 1971, Aldrin became Commandant of the U.S. Air Force Test Pilot School. He retired from the Air Force in 1972, after 21 years of service. His autobiographies Return to Earth (1973) and Magnificent Desolation (2009) recount his struggles with clinical depression and alcoholism in the years after leaving NASA. Aldrin continues to advocate for space exploration, particularly a human mission to Mars, and developed the Aldrin cycler, a special spacecraft trajectory that makes travel to Mars more efficient in terms of time and propellant. He has been accorded numerous honors, including the Presidential Medal of Freedom in 1969.",
            ],
            [
                "firstName" => "Yuri",
                "lastName" => "Gagarin",
                "position" => "Vostok",
                "rank" => "Pilot Cosmonaut",
                "timeInSpace" => "1 hour, 48 minutes",
                "numberOfMissions" => "1",
                "missions" => "Vostok 1",
                "education" => "First Chkalovsky Higher Air Force Pilots School",
                "yearsActive" => "3",
                "status" => "inactive",
                "astronautImage" => "Yuri_Gagarin.jpg",
                "astronautDescription" => "Yuri Alekseyevich Gagarin[a] (9 March 1934 – 27 March 1968) was a Soviet pilot and cosmonaut who became the first human to journey into outer space. Travelling in the Vostok 1 capsule, Gagarin completed one orbit of Earth on 12 April 1961. By achieving this major milestone in the Space Race he became an international celebrity, and was awarded many medals and titles, including Hero of the Soviet Union, his nation's highest honour.
                Gagarin was born in the Russian village of Klushino, and in his youth was a foundryman at a steel plant in Lyubertsy. He later joined the Soviet Air Forces as a pilot and was stationed at the Luostari Air Base, near the Norwegian border, before his selection for the Soviet space programme with five other cosmonauts. Following his spaceflight, Gagarin became deputy training director of the Cosmonaut Training Centre, which was later named after him. He was also elected as a deputy of the Soviet of the Union in 1962 and then to the Soviet of Nationalities, respectively the lower and upper chambers of the Supreme Soviet.
                Vostok 1 was Gagarin's only spaceflight, but he served as the backup crew to the Soyuz 1 mission, which ended in a fatal crash, killing his friend and fellow cosmonaut Vladimir Komarov. Fearful that a national hero might be killed, Soviet officials banned Gagarin from further spaceflights. After completing training at the Zhukovsky Air Force Engineering Academy in February 1968, he was again allowed to fly regular aircraft. Gagarin died five weeks later when the MiG-15 training jet he was piloting with flight instructor Vladimir Seryogin crashed near the town of Kirzhach.",
            ],
            [
                "firstName" => "Vladimir",
                "lastName" => "Komarov",
                "position" => "Voskhod",
                "rank" => "Commander",
                "timeInSpace" => "	2 days 3 hour 4 minutes",
                "numberOfMissions" => "2",
                "missions" => "Voskhod 1 and Soyuz 1",
                "education" => "Zhukovsky Air Force Engineering Academy",
                "yearsActive" => "10",
                "status" => "inactive",
                "astronautImage" => "Vladimir_Mikhailovich_Komarov.jpg",
                "astronautDescription" => "Vladimir Mikhaylovich Komarov (Russian: Влади́мир Миха́йлович Комаро́в, 16 March 1927 – 24 April 1967) was a Soviet test pilot, aerospace engineer, and cosmonaut. In October 1964, he commanded Voskhod 1, the first spaceflight to carry more than one crew member. He became the first Soviet cosmonaut to fly in space twice when he was selected as the solo pilot of Soyuz 1, its first crewed test flight. A parachute failure caused his Soyuz capsule to crash into the ground after re-entry on 24 April 1967, making him the first human to die in a space flight.[1]
                He was declared medically unfit for training or spaceflight twice while he was in the program but continued playing an active role. During his time at the cosmonaut training center, he contributed to space vehicle design, cosmonaut training, evaluation and public relations.",
            ],
            [
                "firstName" => "Alexei",
                "lastName" => "Leonov",
                "position" => "Voskhod",
                "rank" => "Second Pilot",
                "timeInSpace" => "	7 days 33 minute",
                "numberOfMissions" => "2",
                "missions" => "Voskhod 2 and Soyuz 19",
                "education" => "Ukrainian preparatory flying school",
                "yearsActive" => "27",
                "status" => "inactive",
                "astronautImage" => "Alexei_Leonov.jpg",
                "astronautDescription" => "Alexei Arkhipovich Leonov[a] (30 May 1934 – 11 October 2019) was a Soviet and Russian cosmonaut, Air Force major general, writer, and artist. On 18 March 1965, he became the first person to conduct a spacewalk, exiting the capsule during the Voskhod 2 mission for 12 minutes and 9 seconds. He was also selected to be the first Soviet person to land on the Moon although the project was cancelled.
                In July 1975, Leonov commanded the Soyuz capsule in the Apollo-Soyuz mission, which docked in space for two days with an American Apollo capsule.",
            ]
        ];
            if (DB::table('astronauts')->count() == 0) {
                Astronaut::insert($astronaut);
            };

            $rocket = [
            [
                "rocketName" => "Saturn V",
                "type" => "Human Spaceflights",
                "placeOfOrigin" => "United States Of America (USA)",
                "rocketMissions" => "Send the Apollo command and service module and Lunar Module to the Moon",
                "usedBy" => "Neil Armstrong , Michael Collins and Buzz Aldrin",
                "manufracture" => "Boeing (S-IC)\r\nNorth American (S-II)\r\nDouglas (S-IVB)",
                "launchSites" => "LC-39, Kennedy Space Center",
                "totalLaunch" => "13",
                "firstFlight" => "1967-11-9",
                "lastFlight" => "1973-5-14",
                "status" => "inactive",
                "rocketImage" => "Saturn_V.jpg",
                "rocketDescription" => "Saturn V[a] is a retired American super heavy-lift launch vehicle developed by NASA under the Apollo program for human exploration of the Moon. The rocket was human-rated, with three stages, and powered with liquid fuel. It was flown from 1967 to 1973. It was used for nine crewed flights to the Moon, and to launch Skylab, the first American space station.\r\n\r\nAs of 2023, the Saturn V remains the only launch vehicle to carry humans beyond low Earth orbit (LEO). Saturn V holds records for the heaviest payload launched and largest payload capacity to low Earth orbit: 310,000 lb (140,000 kg), which included the third stage and unburned propellant needed to send the Apollo command and service module and Lunar Module to the Moon.\r\n\r\nThe largest production model of the Saturn family of rockets, the Saturn V was designed under the direction of Wernher von Braun at the Marshall Space Flight Center in Huntsville, Alabama; the lead contractors were Boeing, North American Aviation, Douglas Aircraft Company, and IBM. A total of 15 flight-capable vehicles were built, plus three for ground testing. Thirteen were launched from Kennedy Space Center with no loss of crew or payload. A total of 24 astronauts were launched to the Moon from Apollo 8 (December 1968) to Apollo 17 (December 1972).",
            ],
            [
                "rocketName" => "Soyuz-FG",
                "type" => "Human Spaceflights",
                "placeOfOrigin" => "Russia",
                "rocketMissions" => "Crewed flight with 3 cosmonauts\r\nISS escape craft",
                "usedBy" => "Nick Hague and Aleksey Ovchinin",
                "manufracture" => "TsSKB-Progress",
                "launchSites" => "Gagarin\'s Start",
                "totalLaunch" => "70",
                "firstFlight" => "2001-5-20",
                "lastFlight" => "2019-9-25",
                "status" => "inactive",
                "rocketImage" => "Soyuz_FG.jpg",
                "rocketDescription" => "The Soyuz-FG launch vehicle was an improved version of the Soyuz-U from the R-7 family of rockets, designed and constructed by TsSKB-Progress in Samara, Russia. Guidance, navigation, and control system was developed and manufactured by \"Polisvit\" Special Design Bureau[6] (Kharkov, Ukraine).\r\n\r\nSoyuz-FG made its maiden flight on 20 May 2001, carrying a Progress cargo spacecraft to the International Space Station (ISS). It was retired after the 25 September 2019 launch of Soyuz MS-15 to the ISS; the analog control system significantly limited its capabilities and prompted its replacement by Soyuz-2.[7] From 30 October 2002 to 25 September 2019, the Soyuz-FG was the only vehicle used by the Russian Federal Space Agency to launch Soyuz-TMA and Soyuz-MS crewed spacecraft to the ISS.\r\n\r\nFor uncrewed flights, Soyuz-FG optionally flew with a Fregat upper stage, developed and produced by Lavochkin Association in Khimki. The maiden flight of this configuration occurred on 2 June 2003, the first of ten such launches.[3] Launches of the Soyuz-FG/Fregat configuration were marketed by a European-Russian company called Starsem.\r\n\r\nSoyuz-FG was launched from the Baikonur Cosmodrome in Kazakhstan, from Gagarin\'s Start (pad LC-1/5) for crewed missions, and from LC-31/6 for satellite launches with the Fregat variant.\r\n\r\nThe Soyuz-FG performed 64 successful launches until its first failure on 11 October 2018 with the Soyuz MS-10 mission. A video recording of the spaceflight released several weeks later suggested a faulty sensor, resulted in the destruction of the rocket. The crew, NASA astronaut Nick Hague and Russian cosmonaut Aleksey Ovchinin, escaped safely.",
            ],
            [
                "rocketName" => "Atlas V - 401",
                "type" => "Expendable Launch System",
                "placeOfOrigin" => "United States of America",
                "rocketMissions" => "Carrying the Lunar Reconnaissance Orbiter and LCROSS space probes",
                "usedBy" => "Lockheed Martin",
                "manufracture" => "United Launch Alliance",
                "launchSites" => "Cape Canaveral, SLC-41\r\nVandenberg, SLC-3E",
                "totalLaunch" => "97",
                "firstFlight" => "2002-8-21",
                "lastFlight" => "2022-11-10",
                "status" => "inactive",
                "rocketImage" => "Atlas_V_401.jpg",
                "rocketDescription" => "Atlas V[a] is an expendable launch system and the fifth major version in the Atlas launch vehicle family. It was originally designed by Lockheed Martin, now being operated by United Launch Alliance (ULA), a joint venture between Lockheed Martin and Boeing. Atlas V is also a major NASA launch vehicle. It is America\'s longest-serving active rocket. In August 2021, ULA announced that Atlas V would be retired, and all 29 remaining launches had been sold.[9] As of 10 November 2022, 19 launches remain.\r\n\r\nEach Atlas V launch vehicle consists of two main stages. The first stage is powered by a Russian RD-180 engine manufactured by Energomash and burning kerosene and liquid oxygen. The Centaur upper stage is powered by one or two American RL10 engine(s) manufactured by Aerojet Rocketdyne and burns liquid hydrogen and liquid oxygen. The Star 48 upper stage was used on the New Horizons mission as a third stage. Strap-on solid rocket boosters (SRBs) are used in most configurations. AJ-60A SRBs were used originally, but they were replaced in November 2020 by Graphite-Epoxy Motor (GEM 63) SRBs. The standard payload fairings are 4.2 or 5.4 m (14 or 18 ft) in diameter with various lengths.",
            ],
            [
                "rocketName" => "Vostok",
                "type" => "Orbital Launch System",
                "placeOfOrigin" => "Uni Soviet (Russian)",
                "rocketMissions" => "Carrying the Lunar Reconnaissance Orbiter and LCROSS space probes",
                "usedBy" => "Yuri Gagarin",
                "manufracture" => "RKK Energia",
                "launchSites" => "Baikonur: LC-1/5, 31/6
                Plesetsk: LC-41/1, 43/3, 43/4",
                "totalLaunch" => "2",
                "firstFlight" => "1960-5-15",
                "lastFlight" => "1991-8-29",
                "status" => "inactive",
                "rocketImage" => "Vostok.jpg",
                "rocketDescription" => "Vostok (Russian: Восток, translated as 'East') was a family of rockets derived from the Soviet R-7 Semyorka ICBM and was designed for the human spaceflight programme. This family of rockets launched the first artificial satellite (Sputnik 1) and the first crewed spacecraft (Vostok) in human history. It was a subset of the R-7 family of rockets.On March 18, 1980, a Vostok-2M rocket exploded on its launch pad at Plesetsk during a fueling operation, killing 48 people. An investigation into a similar – but avoided – accident revealed that the substitution of lead-based for tin-based solder in hydrogen peroxide filters allowed the breakdown of the H2O2, thus causing the resultant explosion",
            ]
        ];
            if(DB::table('rockets')->count() == 0){
                Rocket::insert($rocket);
            };
            $star = [
            [
                "starName" => "Sirius",
                "starConstellation" => "Canis Major",
                "starDeclination" => "−11.03° to −33.25°",
                "starArea" => "380 sq. deg.",
                "starDegreeVisible" => "+60° and −90°",
                "starDateVisible" => "2023-05-18",
                "starTimeVisible" => "21:00 until 00:00",
                "starImage" => "Sirius.jpg",
                "starDescription" => "Sirius is the brightest star in the night sky. Its name is derived from the Greek word Σείριος, or Seirios, meaning lit. \'glowing\' or \'scorching\'. The star is designated α Canis Majoris, Latinized to Alpha Canis Majoris, and abbreviated α CMa or Alpha CMa. With a visual apparent magnitude of −1.46, Sirius is almost twice as bright as Canopus, the next brightest star. Sirius is a binary star consisting of a main-sequence star of spectral type A0 or A1, termed Sirius A, and a faint white dwarf companion of spectral type DA2, termed Sirius B. The distance between the two varies between 8.2 and 31.5 astronomical units as they orbit every 50 years.[25]\r\n\r\nSirius appears bright because of its intrinsic luminosity and its proximity to the Solar System. At a distance of 2.64 parsecs (8.6 ly), the Sirius system is one of Earth\'s nearest neighbours. Sirius is gradually moving closer to the Solar System; it is expected to increase in brightness slightly over the next 60,000 years to reach a peak magnitude of −1.68. Coincidentally, at about the same time, Sirius will take its turn as the southern Pole Star, around the year 66270. In that year, Sirius will come to within 1.6 degrees of the south celestial pole. This is due to precession and proper motion of Sirius itself which moves slowly in the SSW direction. So it will be visible from the southern hemisphere only. [26] After that time, its distance will begin to increase, and it will become fainter, but it will continue to be the brightest star in the Earth\'s night sky for approximately the next 210,000 years, at which point Vega, another A-type star that is intrinsically more luminous than Sirius, becomes the brightest star.[27]\r\n\r\nSirius A is about twice as massive as the Sun (M☉) and has an absolute visual magnitude of +1.43. It is 25 times as luminous as the Sun,[13] but has a significantly lower luminosity than other bright stars such as Canopus, Betelgeuse, or Rigel. The system is between 200 and 300 million years old.[13] It was originally composed of two bright bluish stars. The initially more massive of these, Sirius B, consumed its hydrogen fuel and became a red giant before shedding its outer layers and collapsing into its current state as a white dwarf around 120 million years ago.[13]\r\n\r\nSirius is colloquially known as the \"Dog Star\", reflecting its prominence in its constellation, Canis Major (the Greater Dog).[19] The heliacal rising of Sirius marked the flooding of the Nile in Ancient Egypt and the \"dog days\" of summer for the ancient Greeks, while to the Polynesians, mostly in the Southern Hemisphere, the star marked winter and was an important reference for their navigation around the Pacific Ocean.",
            ],
            [
                "starName" => "Acrux",
                "starConstellation" => "Canis Major",
                "starDeclination" => "−60°', '68 sq. deg",
                "starArea" => "380 sq. deg.",
                "starDegreeVisible" => "+20° and −90°",
                "starDateVisible" => "2023-05-28",
                "starTimeVisible" => "21:00 until 02:45",
                "starImage" => "Acrux.png",
                "starDescription" => "Acrux is the brightest star in the southern constellation of Crux. It has the Bayer designation α Crucis, which is Latinised to Alpha Crucis and abbreviated Alpha Cru or α Cru. With a combined visual magnitude of +0.76, it is the 13th-brightest star in the night sky. It is the most southerly star of the asterism known as the Southern Cross and is the southernmost first-magnitude star, 2.3 degrees more southerly than Alpha Centauri.[14] This system is located at a distance of 321 light-years from the Sun.[1][15]\r\n\r\nTo the naked eye Acrux appears as a single star, but it is actually a multiple star system containing six components. Through optical telescopes, Acrux appears as a triple star, whose two brightest components are visually separated by about 4 arcseconds and are known as Acrux A and Acrux B, α1 Crucis and α2 Crucis, or α Crucis A and α Crucis B. Both components are B-type stars, and are many times more massive and luminous than the Sun. α1 Crucis is itself a spectroscopic binary with components designated α Crucis Aa (officially named Acrux, historically the name of the entire system)[16][17] and α Crucis Ab. Its two component stars orbit every 76 days at a separation of about 1 astronomical unit (AU).[11] HR 4729, also known as Acrux C, is a more distant companion, forming a triple star through small telescopes. C is also a spectroscopic binary, which brings the total number of stars in the system to at least five.",
            ],
            [
                "starName" => "Procyon",
                "starConstellation" => "Canis Minor",
                "starDeclination" => "13.22° to −0.36°",
                "starArea" => "183 sq. deg",
                "starDegreeVisible" => "+90° and −75°",
                "starDateVisible" => "2024-03-14",
                "starTimeVisible" => "21:00 until 00:00",
                "starImage" => "Procyon.jpg",
                "starDescription" => "Procyon (/ˈproʊsi.ɒn/)[15] is the brightest star in the constellation of Canis Minor and usually the eighth-brightest star in the night sky, with an apparent visual magnitude of 0.34.[3] It has the Bayer designation α Canis Minoris, which is Latinized to Alpha Canis Minoris, and abbreviated α CMi or Alpha CMi, respectively. As determined by the European Space Agency Hipparcos astrometry satellite,[16] this system lies at a distance of just 11.46 light-years (3.51 parsecs),[2] and is therefore one of Earth\'s nearest stellar neighbors.\r\n\r\nA binary star system, Procyon consists of a white-hued main-sequence star of spectral type F5 IV–V, designated component A, in orbit with a faint white dwarf companion of spectral type DQZ,[5] named Procyon B. The pair orbit each other with a period of 40.84 years and an eccentricity of 0.4",
            ]
        ];
            if(DB::table('stars')->count() == 0){
                Star::insert($star);
            };

            $planet = [
            [
                "planetName" => "Earth",
                "planetAlternativeName" => "Prithvi, Gaia, Terra, Tellus, the world, the globe, Sol III, Mother Earth",
                "planetSurfaceArea" => "510072000 km^2",
                "planetVolume" => "1.08×10^12 km^3",
                "planetMass" => "5.97×10^24 kg",
                "planetGravity" => "9.8 m/s^2",
                "planetImage" => "Earth.jpg",
                "planetDescription" => "Earth is the third planet from the Sun and the only place known in the universe where life has originated and found habitability. While Earth may not contain the largest volumes of water in the Solar System, only Earth sustains liquid surface water, extending over 70.8% of the Earth with its ocean, making Earth an ocean world. Earth\'s polar regions currently retain most of all other water with large sheets of ice covering ocean and land, dwarfing Earth\'s groundwater, lakes, rivers and atmospheric water. Land, consisting of continents and islands, extends over 29.2% of the Earth and is widely covered by vegetation. Below Earth\'s surface material lies Earth\'s crust consisting of several slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth\'s liquid outer core generates a magnetic field that shapes the magnetosphere of Earth, largely deflecting destructive solar winds and cosmic radiation.\r\n\r\nEarth has an atmosphere, which sustains Earth\'s surface conditions and protects it from most meteoroids and UV-light at entry. It has a composition of primarily nitrogen and oxygen. Water vapor is widely present in the atmosphere, forming clouds that cover most of the planet. The water vapor acts as a greenhouse gas and, together with other greenhouse gases in the atmosphere, particularly carbon dioxide (CO2), creates the conditions for both liquid surface water and water vapour to persist via the capturing of energy from the Sun\'s light. This process maintains the current average surface temperature of 14.76 °C, at which water is liquid under atmospheric pressure. Differences in the amount of captured energy between geographic regions (as with the equatorial region receiving more sunlight than the polar regions) drive atmospheric and ocean currents, producing a global climate system with different climate regions, and a range of weather phenomena such as precipitation, allowing components such as nitrogen to cycle.\r\n\r\nEarth is rounded into an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest and most massive. Earth is about eight light-minutes away from the Sun and orbits it, taking a year (about 365.25 days) to complete one revolution. The Earth rotates around its own axis in slightly less than a day (in about 23 hours and 56 minutes). The Earth\'s axis of rotation is tilted with respect to the perpendicular to its orbital plane around the Sun, producing seasons. Earth is orbited by one permanent natural satellite, the Moon, which orbits Earth at 384,400 km (1.28 light seconds) and is roughly a quarter as wide as Earth. Through tidal locking, the Moon always faces the Earth with the same side, which causes tides, stabilizes Earth\'s axis, and gradually slows its rotation.\r\n\r\nEarth, like most other bodies in the Solar System, formed 4.5 billion years ago from gas in the early Solar System. During the first billion years of Earth\'s history, the ocean formed and then life developed within it. Life spread globally and has been altering Earth\'s atmosphere and surface, leading to the Great Oxidation Event two billion years ago. Humans emerged 300,000 years ago, and have reached a population of 8 billion today. Humans depend on Earth\'s biosphere and natural resources for their survival, but have increasingly impacted the planet\'s environment. Humanity\'s current impact on Earth\'s climate and biosphere is unsustainable, threatening the livelihood of humans and many other forms of life, causing widespread extinctions."
            ],
            [
                "planetName" => "Mars",
                "planetAlternativeName" => "The Red Planet",
                "planetSurfaceArea" => "144.37×10^6 km^2",
                "planetVolume" => "1.63 ×10^11 km^3",
                "planetMass" => "6.41×10^23 kg",
                "planetGravity" => "3.72 m/s2",
                "planetImage" => "Mars.jpg",
                "planetDescription" => "Mars is the fourth planet from the Sun and the third largest and massive terrestrial object in the Solar System. Mars has a thin atmosphere and a crust primarily composed of elements similar to Earth\'s crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. Mars has two small, irregularly shaped moons, Phobos and Deimos.\r\n\r\nSome of the most notable surface features on Mars include Olympus Mons, the largest volcano and highest-known mountain in the Solar System, and Valles Marineris, one of the largest canyons in the Solar System. The Borealis basin in the Northern Hemisphere covers approximately 40% of the planet and may be a large impact feature.[21] Days and seasons on Mars are comparable to those of Earth, as the planets have a similar rotation period and tilt of the rotational axis relative to the ecliptic plane. Liquid water on the surface of Mars cannot exist due to low atmospheric pressure, which is less than 1% of the atmospheric pressure on Earth.[22][23] Both of Mars\'s polar ice caps appear to be made largely of water.[24][25] In the distant past, Mars was likely wetter, and thus possibly more suited for life. It is not known whether life has ever existed on Mars.\r\n\r\nMars has been explored by several uncrewed spacecraft, beginning with Mariner 4 in 1965. NASA\'s Viking 1 lander transmitted the first images from the Martian surface in 1976. Two countries have successfully deployed rovers on Mars, the United States first doing so with Sojourner in 1997 and China with Zhurong in 2021.[26] There are also planned future missions to Mars, such as a NASA-ESA Mars Sample Return set to happen in 2026, and the Rosalind Franklin rover mission, which was intended to launch in 2018 but was delayed to 2024 at the earliest, with a more likely launch date at 2028.\r\n\r\nMars can be viewed from Earth with the naked eye, as can its reddish coloring. This appearance, due to the iron oxide prevalent on its surface, has led to Mars often being called the Red Planet.[27][28] It is among the brightest objects in Earth\'s sky, with an apparent magnitude that reaches −2.94, comparable to that of Jupiter and surpassed only by Venus, the Moon and the Sun.[16] Mars has been observed since ancient times. Over the millennia it has been featured in culture and the arts in ways that have reflected humanity\'s growing knowledge of it"
            ],
            [
                "planetName" => "Jupiter",
                "planetAlternativeName" => "Giant Planets",
                "planetSurfaceArea" => "6.14×10^10 km2",
                "planetVolume" => "1.43×10^15 km^3",
                "planetMass" => "1.89×10^27 kg",
                "planetGravity" => "24.79 m/s^2",
                "planetImage" => "Jupiter.jpg",
                "planetDescription" => "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth\'s night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion.\r\n\r\nJupiter is primarily composed of hydrogen (90% by volume), followed by helium, which constitutes a quarter of its mass and a tenth of its volume. The ongoing contraction of Jupiter\'s interior generates more heat than the planet receives from the Sun. Because of its rapid rotation rate of 1 rotation per 10 hours, the planet\'s shape is an oblate spheroid: it has a slight but noticeable bulge around the equator. The outer atmosphere is divided into a series of latitudinal bands, with turbulence and storms along their interacting boundaries. A prominent result of this is the Great Red Spot, a giant storm which has been observed since at least 1831.\r\n\r\nJupiter is surrounded by a faint planetary ring system and has a powerful magnetosphere. The planet\'s magnetic tail is nearly 800 million kilometres (5.3 astronomical units; 500 million miles) long. Jupiter has 95 known moons and probably many more, including the four large moons discovered by Galileo Galilei in 1610: Io, Europa, Ganymede, and Callisto. Ganymede, the largest of the four, is larger than the planet Mercury. Callisto is the second largest; Io and Europa are approximately the size of Earth\'s moon.\r\n\r\nPioneer 10 was the first spacecraft to visit Jupiter, making its closest approach to the planet in December 1973. Jupiter has since been explored by multiple robotic spacecraft, beginning with the Pioneer and Voyager flyby missions from 1973 to 1979. The Galileo orbiter arrived in orbit around Jupiter in 1995. In 2007, New Horizons visited Jupiter for a gravity assist to increase its speed and bend its trajectory on the way to Pluto. The latest probe to visit Jupiter, Juno, entered its orbit in July 2016. Future targets for exploration in the Jupiter system include its moon Europa, which probably has an ice-covered liquid ocean which scientists think could sustain life."
            ],
            [
                "planetName" => "Saturn",
                "planetAlternativeName" => "Ring Planets",
                "planetSurfaceArea" => "4.27×10^10 km2",
                "planetVolume" => "8.2713×10^14 km3",
                "planetMass" => "5.6834×10^26 kg",
                "planetGravity" => "10.44 m/s^2",
                "planetImage" => "Saturn.jpg",
                "planetDescription" => "Saturn is the sixth planet from the Sun and has an intricate dazzling ring system. It is the second-largest planet in the Solar System, and with 96% of the planet is made out of lightweight hydrogen, Saturn is also the least dense planet in the Solar System. The planet's yellowish atmosphere is composed of intricate but usually bland-looking bands. Occasionally, oval-shaped storms would trail across Saturn's atmosphere, the biggest of these storms are the periodic Great White Spots. At Saturn's north pole is a persisting hexagonal storm, which shape currently does not have a definite explanation. Saturn has a magnetosphere with a strength comparable to Earth's, which can create aurora in the outer atmosphere.
                Saturn is classified as a gas giant and is thought to have a rocky core (with a scorching temperature of 11,700 °C or 21,100 °F) surrounded by metallic hydrogen, an intermediate layer of liquid hydrogen and helium, and a gaseous outer atmosphere. Inside the atmosphere are stacked cloud layers, made out of ammonia, water, and ammonium hydrosulfide ice. Saturn rotates once around its axis in around 10.5 hours,[c] so fast that the planet bulges: its radius around the equator is 60,268 km (37,449 mi) is about 10% more than around the poles at 54,364 km (33,780 mi). Saturn orbits one time around the Sun in 29.5 Earth years and is the second most massive planet in the Solar System, at 95 times the Earth's mass.
                The rings around Saturn is mostly made out of water ice particles, peppered with carbon and tholins. Compared to Saturn's age of around 4.5 billion years, these rings are thought to be relatively new and formed around 10–100 million years ago. Some of the gaps in Saturn's rings are caused by its shepherd moons, some are due to the larger outer moons destabilizing the rings structure, and a few are still unexplained. As of May 2023, Saturn has 145 known moons; the largest of these moons is Titan, which also has a dense hazy atmosphere.
                Saturn is visible to the naked eye, thus it is known since the ancient times. In English, the planet's name is derived from the Roman god of wealth and agriculture Sāturnus. However, its ring and moons are only discovered with the invention of the telescope in the late 17th century. As of 2023, Saturn has been visited up close by three flyby probes made by NASA – Pioneer 11 (1979), Voyager 1 (1980) and Voyager 2 (1981) – and one made by the European Space Agency, Cassini–Huygens. The Cassini–Huygens probe consisted of two parts: Cassini orbiter (active from 2004 to 2017) and the Huygens probe (landed on Titan in 2005). It is planned that in 2034, NASA's Dragonfly rotorcraft will make the first flight on the surface of Titan."
            ],
        ];
        if(DB::table('planets')->count() == 0){
            Planet::insert($planet);
        };
    }
}