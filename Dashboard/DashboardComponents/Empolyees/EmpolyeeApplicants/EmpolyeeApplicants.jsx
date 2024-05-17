import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { BiLogoZoom } from "react-icons/bi";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PageTitle from '../../GlobalComponents/PageTitle';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '@/src/utils/axiosConfig';
import { SlRefresh } from "react-icons/sl";
import Swal from 'sweetalert2';
import Loader from "../../GlobalComponents/Loader";


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 12,
  },
});

const EmpolyeeApplicants = () => {
  const [allApplicants, setAllApplicants] = useState([]);
  const location = useLocation();
  const [refaresh, setReafresh] = useState(1);
  const [id] = useState(new URLSearchParams(location.search).get("id"));
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const Title = {
    title: "All applicants",
  };

  const Applicants = async () => {
    try {
      setLoading2(true);
      const res = await axiosInstance.get(`employer/job/${id}/applicant`);
      setAllApplicants(res.data.data);
      console.log(res, "ff");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    Applicants();
  }, [refaresh]);

  const handleUpdate = async (applicantNo, status) => {
    try {
      setLoading(true);
      const res = await axiosInstance.put(`/employer/job/applicant`, {
        applicantNo: applicantNo,
        status: status
      });
      if (res.status === 200) {
        Swal.fire({
          title: "Good job!",
          icon: "success"
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  // Function to generate PDF document
  const MyPDFDocument = ({ allApplicants }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>Applicant Information:</Text>
        {allApplicants.map((app, i) => (
          <View key={i} style={styles.section}>
         
            <Text style={styles.text}>CV: {app.candidateId.cvAttachment}</Text>
            {/* Add more information as needed */}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

  return (
    <>
      <div className='flex flex-col border w-full'>
        <div className='mt-5 ml-5'>
          <div className="w-full">
            <PageTitle Title={Title} />
          </div>
        </div>
        <div className='mt-3'>
          <div className='p-5 flex flex-col '>
            <div className='justify-end flex text-xl text-divyang' >
              <button className='flex items-center gap-2' onClick={() => setReafresh(refaresh + 1)}> Refresh <SlRefresh /></button>
            </div>
            <Table className="border" style={{ background: "#ffffff" }} >
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-black">NAME</TableHead>
                  <TableHead className="font-bold text-black">STATUS</TableHead>
                  <TableHead className="font-bold text-black">INFORMATION</TableHead>
                  <TableHead className="font-bold text-black">CV</TableHead>
                  <TableHead className="font-bold text-black">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  allApplicants.length === 0 ? (
                    <>
                      <div className='flex w-full justify-center '>
                        <div>
                          {loading2 && <Loader />}
                          <p className=' my-5 font-medium text-xl'>No Applicants have <span className='text-divyang'> Come yet</span> </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {
                        allApplicants.map((app, i) => {
                          return (
                            <TableRow key={i}>
                              <TableCell>
                                <span className='font-bold'>{app?.candidateId?.totalyears}</span> <br />
                                <span>{app?.candidateId?.qualification}</span>
                                {loading && <Loader />}
                              </TableCell>
                              <TableCell>
                                <select className="mt-1 border-none rounded-md shadow-sm focus:border-none focus:ring-0 focus:ring-info-50 focus:ring-opacity-0"
                                  onChange={(e) => handleUpdate(app.applicantNo, e.target.value)}
                                  defaultValue={app.status}>
                                  <option className="bg-gray-100" value={"sent"} >Padding</option>
                                  <option className="bg-gray-100" value={"shortlisted"} >Shortlisted</option>
                                  <option className="bg-gray-100" value={"rejected"} >Rejected</option>
                                </select>
                              </TableCell>
                              <TableCell>
                                <span>{app?.candidateId?.jobEmail === "" ? " Not updated profile" : app?.candidateId?.jobEmail}</span> <br />
                                <span>{app?.candidateId?.jobPhone}</span>
                              </TableCell>
                              <TableCell >
                                <Link className='text-blue-600' target="_blank" to={`https://divyangcareer.s3.ap-south-1.amazonaws.com/assets/file/${app?.candidateId?.cvAttachment}`} >view cv
                                </Link>
                              </TableCell>
                              <TableCell >
                                <div className='flex text-2xl'>
                                  <div>
                                    <Link to={`/dashboard/employers/post-meeting?id=${app?.candidateId?._id}`}>
                                      <BiLogoZoom className=' ml-5 text-3xl text-blue-600 cursor-pointer' />
                                    </Link>
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          );
                        })
                      }
                    </>
                  )
                }
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div style={{ height: '600px', width: '100%', marginTop: '20px' }}>
        <PDFViewer width="100%" height="100%">
          <MyPDFDocument allApplicants={allApplicants} />
        </PDFViewer>
      </div>

      {/* PDF Download Link */}
      <PDFDownloadLink document={<MyPDFDocument allApplicants={allApplicants} />} fileName="applicants.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </>
  );
};

export default EmpolyeeApplicants;
