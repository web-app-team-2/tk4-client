import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './CreateProductPage.module.css';
import FormWarningTextComponent from '../../components/FormWarningText/FormWarningTextComponent';
import { useSubmitForm } from './CreateProductPage.hooks';
import LoadingComponent from '../../components/Loading/LoadingComponent';
import arrowIcon from '../../../public/arrow-back.svg';

function CreateProductPage() {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();
  const { loading, success, submitForm } = useSubmitForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate('/');
  }, [success]);

  return (
    <div className={styles['page-container']}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles['navigation-and-title-container']}>
            <div onClick={() => navigate(-1)}>
              <img src={arrowIcon} alt="back" className={styles['back-btn']} />
            </div>
            <h3 style={{ marginBottom: '0' }}><strong>Tambah Data</strong></h3>
          </div>
          <div className={styles['button-group']} onClick={() => reset()}>
            <button type="button" className="btn btn-primary">Reset Form</button>
          </div>
        </div>
        <hr className="solid" style={{ margin: '0' }} />
        {loading ? <LoadingComponent /> : (
          <div className={styles.form}>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="mb-3 has-validation">
                <label htmlFor="exampleInputEmail1" className="form-label">NIM</label>
                <input className="form-control" id="validationCustomUsername" aria-describedby="emailHelp" {...register('nim', { required: true })} aria-invalid />
                {errors.nim && <FormWarningTextComponent text="NIM wajib diisi" />}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nama</label>
                <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('name', { required: true })} />
                {errors.name && <FormWarningTextComponent text="Nama wajib diisi" />}
              </div>

              <div className="mb-3 has-validation">
                <label htmlFor="exampleInputEmail1" className="form-label">Alamat</label>
                <input className="form-control" id="validationCustomUsername" aria-describedby="emailHelp" {...register('address', { required: true })} aria-invalid />
                {errors.address && <FormWarningTextComponent text="Alamat wajib diisi" />}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Jenis Kelamin</label>
                <div>
                  <div>
                    <input type="radio" value="L" {...register('gender', { required: true })} />
                    Laki-laki
                  </div>
                  <div>
                    <input type="radio" value="F" {...register('gender', { required: true })} />
                    Perempuan
                  </div>
                  {errors.gender && <FormWarningTextComponent text="Jenis kelamin wajib diisi" />}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Hobi</label>
                {
                  ['Tidur', 'Bangun'].map((hobby) => (
                    <div className="form-check">
                      <input value={hobby} className="form-check-input" type="checkbox" id="flexCheckDefault" {...register('hobbies', { required: true, min: 1 })} />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        {hobby}
                      </label>
                    </div>
                  ))
                }
                {errors.hobbies && <FormWarningTextComponent text="Wajib pilih salah satu hobi" />}
              </div>

              <div className="mb-3 has-validation">
                <label htmlFor="exampleInputEmail1" className="form-label">Komentar</label>
                <input className="form-control" id="validationCustomUsername" aria-describedby="emailHelp" {...register('comment', { required: true })} aria-invalid />
                {errors.comment && <FormWarningTextComponent text="Komentar wajib diisi" />}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateProductPage;
