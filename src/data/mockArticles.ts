import type { Article } from '../types'

export const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    headline: 'Archduke Franz Ferdinand Assassinated in Sarajevo',
    subheadline: 'Heir to Austro-Hungarian Throne Shot Dead; Duchess of Hohenberg Also Slain in Bosnian Capital',
    snippet:
      'The heir to the Austro-Hungarian throne was shot dead alongside his wife Sophie in the Bosnian capital today, an act that threatens to plunge the continent into open conflict. Witnesses report the assassin fired at close range as the royal motorcade passed through the city centre.',
    source: 'The Times',
    date: 'June 28, 1914',
    location: 'London',
    author: 'H. W. Steed',
    edition: 'Evening Edition',
    fullText: [
      'SARAJEVO, June 28 — Archduke Franz Ferdinand, heir presumptive to the throne of Austria-Hungary, and his morganatic wife, the Duchess of Hohenberg, were shot and killed this morning as their open motorcar passed through the streets of this Bosnian city. The assassin, a young man later identified as Gavrilo Princip, a Bosnian Serb of nineteen years, discharged a revolver at close range from the pavement, striking both the Archduke and the Duchess with fatal effect.',
      'The royal party had come to Sarajevo on an official visit and had already survived one attempt upon their lives earlier in the morning, when a bomb was thrown at their vehicle from the crowd. The device struck the following motorcar and wounded several members of the entourage. Unperturbed, the Archduke continued with his programme, later insisting upon visiting those wounded in the bomb attack at the municipal hospital. It was on this detour that Princip, who had abandoned the earlier plot as failed, encountered the motorcade by chance at a delicatessen on Franz Josef Street.',
      'News of the assassination was received in Vienna with profound shock and grief. The Emperor Franz Joseph, now in the eighty-fourth year of his reign, was informed of the deaths at his summer residence at Bad Ischl. Government ministers and military officers have been summoned to the capital for emergency consultations. There is widespread apprehension in diplomatic circles that the murders, believed to have been planned with the connivance of Serbian nationalist societies, may be used as a pretext for a more forceful Austrian policy toward Belgrade, with consequences that could scarcely be confined to the Balkans alone.',
    ],
  },
  {
    id: 2,
    headline: 'Austria-Hungary Issues Sweeping Ultimatum to Belgrade',
    subheadline: 'Vienna Demands Right to Conduct Judicial Inquiry on Serbian Soil; Forty-Eight Hours Given for Full Compliance',
    snippet:
      'In a bold diplomatic move that has alarmed chancelleries across Europe, Vienna has delivered a forty-eight-hour ultimatum to the Serbian government demanding unprecedented concessions, including the right to conduct its own judicial inquiry on Serbian soil.',
    source: 'The Guardian',
    date: 'July 24, 1914',
    location: 'Manchester',
    author: 'C. P. Scott',
    edition: 'Morning Edition',
    fullText: [
      'BELGRADE, July 23 — The Austro-Hungarian government this evening presented to the Serbian Ministry of Foreign Affairs a note of the most peremptory character, demanding within forty-eight hours a series of concessions so sweeping as to amount, in the judgement of many experienced diplomatists, to a virtual negation of Serbian sovereignty. The note, which has been communicated simultaneously to the Great Powers, holds Serbia responsible for the propaganda which culminated in the murders at Sarajevo and demands that Belgrade suppress all anti-Austrian societies, dismiss certain named officials, and — most controversially — permit Austro-Hungarian officials to participate directly in the judicial investigation on Serbian territory.',
      'The Serbian Prime Minister, Mr. Nikola Pašić, who had been absent from the capital during the delivery of the note, returned hastily to Belgrade upon receiving the news. The government is understood to be in continuous session, weighing the precise terms of the note against the political impossibility of accepting clauses which would place foreign agents in command of internal Serbian judicial proceedings. Russia, regarded in Belgrade as the patron and protector of the Slavic nations, has been urgently consulted, and St. Petersburg is expected to make its position known before the expiry of the Austrian deadline.',
      'In London, the Foreign Secretary Sir Edward Grey has expressed grave concern at the terms of the ultimatum, describing them privately to colleagues as the most formidable document he had ever seen addressed by one state to another that remained independent. The French and Russian ambassadors have been in conference at the Foreign Office throughout the afternoon. Whether the Concert of Europe retains sufficient coherence to mediate the dispute before the deadline elapses remains, at this hour, profoundly uncertain.',
    ],
  },
  {
    id: 3,
    headline: 'Germany Declares War on Russia; Mobilisation Begins at Midnight',
    subheadline: 'The Kaiser Signs the Order; French and Belgian Frontiers Reported Closed as Armies Move East and West',
    snippet:
      'Germany formally declared war on Russia yesterday evening, setting in motion the largest military mobilisation Europe has ever witnessed. Troop trains moved through the night along all major rail lines towards the eastern frontier as the kaiser signed the order.',
    source: 'New York Tribune',
    date: 'August 2, 1914',
    location: 'New York',
    author: 'Richard Harding Davis',
    edition: 'Extra Edition',
    fullText: [
      'BERLIN, August 1 — Germany today declared a state of war against Russia, the imperial government having concluded that the Russian general mobilisation, ordered yesterday and directed against Austria-Hungary and Germany alike, constituted an act of aggression to which no answer other than the sword was possible. The declaration was signed by the Kaiser at the Berliner Schloss at six o\'clock in the evening and communicated simultaneously to the Russian ambassador, Count Pourtalès, who is reported to have wept upon receiving the document. Military mobilisation orders, which have been held in readiness for precisely such a contingency, were issued within the hour.',
      'Throughout the night troop trains have been moving in an unbroken stream along the great military railways towards the eastern frontier, carrying infantry, artillery, and cavalry to their designated concentration points. Berlin itself presents a scene of controlled but unmistakable agitation: reservists in their thousands have reported to barracks, shops have begun to shutter their windows, and crowds have gathered before the imperial palace with a mixture of patriotic fervour and anxious uncertainty. The atmosphere, our correspondent reports, is unlike anything witnessed since the Franco-Prussian war of forty-four years ago.',
      'The position of France remains the paramount question of the hour. Under the terms of the Franco-Russian alliance, France is bound to enter any war in which Russia is engaged against Germany. The French ambassador in Berlin, M. Jules Cambon, has already been asked by the German Foreign Office to state whether France intends to remain neutral, a question which Paris has declined to answer in the terms posed. In Brussels, the Belgian government has been informed by Berlin that German strategic necessity may require the passage of troops through Belgian territory — a demand which strikes at the very foundation of the 1839 treaty by which Britain, among others, guaranteed Belgian neutrality. Should Britain feel compelled to act upon that guarantee, the conflict will have assumed dimensions which few dared contemplate even a fortnight ago.',
    ],
  },
]
