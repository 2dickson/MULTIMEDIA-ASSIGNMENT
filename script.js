
const formats = [
  ["WAV", "wav", "Uncompressed PCM audio", "Uncompressed"],
  ["MP3", "mp3", "Lossy MPEG audio", "Lossy"],
  ["OGG", "ogg", "Ogg Vorbis audio", "Lossy"],
  ["FLAC", "flac", "Lossless FLAC audio", "Lossless"],
  ["AAC", "aac", "Advanced Audio Coding", "Lossy"],
  ["M4A", "m4a", "AAC in MP4 container", "Lossy"],
  ["OPUS", "opus", "Opus compressed audio", "Lossy"],
  ["AIFF", "aiff", "Uncompressed AIFF audio", "Uncompressed"],
  ["WMA", "wma", "Windows Media Audio", "Lossy"],
  ["WEBM", "webm", "Opus audio in WebM container", "Lossy"]
];

const root = document.querySelector("#formats");

if (root) {
  root.innerHTML = formats.map(([name, ext, desc, type]) => {

    const needsPreview = ext === "aiff" || ext === "wma";

    const audioSource = needsPreview
      ? "assets/sample.mp3"
      : `assets/sample.${ext}`;

    const explanation = needsPreview
      ? `<small>
           <strong>MP3 listening preview.</strong>
           Native ${name} playback may not be supported
           by Chrome. Download the original file below
           to test it in a compatible media player.
         </small>`
      : `<small>
           Native playback depends on browser and codec support.
         </small>`;

    return `
      <article class="format-card">

        <span class="format-label">${type}</span>

        <h2>${name}</h2>

        <p>${desc}</p>

        <audio controls preload="metadata"
               src="${audioSource}">
          Your browser does not support HTML5 audio.
        </audio>

        ${explanation}

        <p>
          <a href="assets/sample.${ext}" download>
            Download original ${name}
          </a>
        </p>

      </article>
    `;
  }).join("");
}
