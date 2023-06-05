import { FormEvent, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getMusicBySearchText } from "../api/MusicAPI";
import MusicCard from "../components/MusicCard";
import MusicPlayer from "../components/MusicPlayer";
import PageNavigator from "../components/PageNavigator";
import SearchForm from "../components/SearchForm";
import { MusicModel } from "../models/Music.model";
import { ResponseModel } from "../models/Response.model";
import { close, open } from "../store/features/spinnerSlice";
import { useAppDispatch } from "../store/hooks";

const Dashboard = () => {
	const dispatch = useAppDispatch();
	const [searchText, setSearchText] = useState<string>("");
	const [musicList, setMusicList] = useState<MusicModel[]>([]);
	const [selectedMusic, setSelectedMusic] = useState<MusicModel | null>();
	const [previousPageUrl, setPreviousPageUrl] = useState<string>();
	const [nextPageUrl, setNextPageUrl] = useState<string>();

	async function handleSearch(
		event: FormEvent<HTMLFormElement>,
		text: string
	): Promise<void> {
		event.preventDefault();
		setSearchText(text);
		dispatch(open());
		const response: ResponseModel<MusicModel> = await getMusicBySearchText(
			searchText
		);
		_setPageStates(response);
		dispatch(close());
	}

	function onPlay(music: MusicModel): void {
		setSelectedMusic(music);
	}

	async function onPreviousPage(): Promise<void> {
		dispatch(open());
		const response: ResponseModel<MusicModel> = await getMusicBySearchText(
			searchText,
			previousPageUrl
		);
		_setPageStates(response);
		dispatch(close());
	}

	async function onNextPage(): Promise<void> {
		dispatch(open());
		const response: ResponseModel<MusicModel> = await getMusicBySearchText(
			searchText,
			nextPageUrl
		);
		_setPageStates(response);
		dispatch(close());
	}

	function _setPageStates(response: ResponseModel<MusicModel>) {
		setSelectedMusic(null);
		setPreviousPageUrl(response.previous);
		setNextPageUrl(response.next);
		setMusicList(response.results);
	}

	function onClosePlayer() {
		setSelectedMusic(null);
	}

	return (
		<>
			<SearchForm handleSearch={handleSearch} />
			{musicList?.length > 0 && (
				<PageNavigator
					nextPageUrl={nextPageUrl}
					previousPageUrl={previousPageUrl}
					onNextPage={onNextPage}
					onPreviousPage={onPreviousPage}
				/>
			)}
			<Row style={{ marginBottom: selectedMusic ? "150px" : "0px" }}>
				{musicList &&
					musicList.map((musicItem: MusicModel) => {
						return (
							<Col
								md={4}
								xs={12}
								key={musicItem.id}
								className="d-flex align-items-stretch"
							>
								<MusicCard {...musicItem} onPlayClick={onPlay}></MusicCard>
							</Col>
						);
					})}
			</Row>
			{selectedMusic && (
				<MusicPlayer {...selectedMusic} onClosePlayer={onClosePlayer} />
			)}
		</>
	);
};

export default Dashboard;
