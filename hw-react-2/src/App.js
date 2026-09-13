import './App.css'

function AlbumCover({ src, alt }){
  return(
    <div className="album-cover-wrapper">
      <img src={src} alt={alt} className="album-cover" />
    </div>
  )
}

function AlbumInfo({ artist, year, label, album }){
  return(
    <div className="album-info">
      <h1 className="album-artist">{artist}</h1>
      <p className="album-meta">
        <span>Year of release: {year}</span>
        <br />
        <span> Label: {label}</span>
        <br />
        <span> Album: {album}</span>
      </p>
    </div>
  )
}

function App(){
  const albumData = {
    artist: 'Blasphamagoatachrist',
    year: 2018,
    label: 'Nuclear War Now! Productions.',
    album: 'Black Metal Warfare',
    coverUrl: 'https://avatars.mds.yandex.net/i?id=169d0266068101a7488f496018d4d0f6_l-5218988-images-thumbs&n=13',
  }

  return(
    <div className="ui-container">
      <header className="ui-header">
        <h2>Favorite album</h2>
      </header>
      <main className="album-card">
        <AlbumCover src={albumData.coverUrl} alt={albumData.album} />
        <AlbumInfo
          artist={albumData.artist}
          year={albumData.year}
          label={albumData.label}
          album={albumData.album}
        />
      </main>
    </div>
  )
}

export default App