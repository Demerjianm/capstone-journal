  import React from 'react';
  import { connect } from 'react-redux';
  import Dropzone from 'react-dropzone';
  import request from 'superagent';

  // class DropZone extends React.Component {
  //   onDrop = (files) => {
  //     request.post('/api/imgupload/upload/')
  //       .attach('file', files[0])
  //       .end((err, res) => {
  //         if (err) console.log(err);
  //         alert('File uploaded!');
  //       })
  //     }
  //
  //   render() {
  //     return (
  //       <section>
  //         <div className="dropzone">
  //           <Dropzone accept="image/jpeg, image/png" onDrop={this.onDrop}>
  //             <p>Try dropping some files here, or click to select files to upload.</p>
  //             <p>Only *.jpeg and *.png images will be accepted</p>
  //           </Dropzone>
  //         </div>
  //       </section>
  //     );
  //   }
  // }

  class DropZone extends React.Component {
    state = { files: [] }

    onDrop = (files) => {
      this.props.setFileUploading();
      this.setState({
        files: [ ...this.state.files, { name: files[0].name, size: files[0].size } ],
      });
      request.post('/api/imgupload/upload/')
            .attach('file', files[0])
            .end((err, res) => {
              this.props.setUrl(res.body.url);
            });
    }

    render() {
      return (
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop}>
              <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
          </div>
        </section>
      );
    }
  }

  // create a new journal entry with title body and links
  // once a journal is created redirect the user to the journal show page
  // move the dropzone to the journal show page
  // this will allow the user to upload photos to the already created journal

  export default connect()(DropZone);