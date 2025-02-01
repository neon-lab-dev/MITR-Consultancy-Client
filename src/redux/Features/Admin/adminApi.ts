import { baseApi } from "../../Api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllUser: builder.query({
      query: () => ({
        url: "/all/user",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getAllPendingKYC: builder.query({
      query: () => ({
        url: "/user/kyc/pending",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getAllEarnings: builder.query({
      query: () => ({
        url: "/earnings",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["earning"],
    }),

    getAllOrders: builder.query({
      query: () => ({
        url: "/allorders",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getSingleOrderById: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getSingleUserById: builder.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    approveKyc: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    rejectKyc: builder.mutation({
      query: (id) => ({
        url: `/user/reject/${id}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    approvePayout: builder.mutation({
      query: (id) => ({
        url: `/approve/payout/${id}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["earning"],
    }),

    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `/course/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["course"],
    }),

    createCourse: builder.mutation({
      query: (courseData) => ({
        url: `/createcourse`,
        method: "POST",
        body: courseData,
        credentials: "include",
      }),
      invalidatesTags: ["course"],
    }),

    addVideo: builder.mutation({
      query: ({formData, courseId}) => ({
        url: `/course/${courseId}`,
        method: "PUT",
        body: formData,
        credentials: "include",
      }),
      invalidatesTags: ["course"],
    }),

    deleteVideo: builder.mutation({
      query: ({courseId, lectureId}) => ({
        url: `/lectures?courseId=${courseId}&lectureId=${lectureId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["course"],
    }),

  }),
});

export const {
  useGetAllUserQuery,
  useGetAllPendingKYCQuery,
  useGetAllEarningsQuery,
  useGetAllOrdersQuery,
  useGetSingleOrderByIdQuery,
  useGetSingleUserByIdQuery,
  useApproveKycMutation,
  useRejectKycMutation,
  useApprovePayoutMutation,
  useDeleteCourseMutation,
  useCreateCourseMutation,
  useAddVideoMutation,
  useDeleteVideoMutation,
} = adminApi;
