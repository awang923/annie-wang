import userAssets from '../../assets/img/userAssets.png';
import allArtists from '../../assets/img/allArtists.png';
import seqShot from '../../assets/img/seqShot.png';
import cronFilter from '../../assets/img/cronFilter.png';
import cronEdit from '../../assets/img/cronEdit.png';
import cronDetails from '../../assets/img/cronDetails.png';

export const carouselItems = [
  {
    title: 'Assets for selected artist',
    description: `Initially, users are only able to view assets through file 
    paths. This feature leverages API communication to retrieve a comprehensive 
    artist list, presented with a drop down menu. Upon user selection, a 
    dynamic API call fetches a tailored set of assets.`,
    src: <img src={userAssets} />,
  },
  {
    title: 'Assets for all artists',
    description: `In addition to selecting a specific artist, this feature 
      displays all artists, sorted by their total asset size. However, 
      retrieving data for hundreds of artists with diverse asset counts 
      affected the app performance. I tackled this by implementing pagination 
      and refined the SQLAlchemy ORM queries to optimize data retrieval. Using 
      Redux state management, I ensured smooth interaction by tracking loaded 
      data and appending new data.`,
    src: <img src={allArtists} />,
  },
  {
    title: 'Assets for seq/shot level',
    description: `Building upon the “All Artists” and “Selected Artist” functionalities, 
      this feature showcases all sequences and shots, sorted by their total asset size. 
      Upon user’s selection, a dynamic API call retrieves a tailored set of assets.`,
    src: <img src={seqShot} />,
  },
];

export const cronFeatures = [
  {
    title: 'View Scheduled Jobs',
    description: `Retrieved scheduled cron jobs and their runtime statuses via AWX API integration. 
    Implemented local caching with localStorage to persist the data and improve performance when 
    displaying crons in a virtualized table. The UI enables filtering based on custom metadata 
    (e.g., domain and affected services) assigned during job creation, allowing for more targeted 
    job management.`,
    src: <img src={cronFilter} />,
  },
  {
    title: 'Edit and View Cron Details',
    description: `Users can access historical run statuses and modify cron schedules directly from 
    the UI. Edits trigger PATCH requests to the AWX API, and Redux state is updated to reflect 
    changes in real-time, ensuring consistency across the application.`,
    src: <img src={cronDetails} />,
  },
  {
    title: 'Create Crons',
    description: `Built an asynchronous workflow that handles parallel API requests to create 
    job templates, configure notification settings, and schedule tasks simultaneously. 
    This ensures that cron creation is efficient and fully automated, reducing manual input 
    across multiple stages.`,
    src: <img src={cronEdit} />,
  },
];